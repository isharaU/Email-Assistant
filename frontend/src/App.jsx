import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
} from '@mui/material';
import './App.css';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [tone, setTone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [reply, setReply] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setGeneratedReply('');
    setReply('');

    try {
      const response = await axios.post('http://localhost:8080/api/email/generate', {
        emailContent,
        tone
      });
      setGeneratedReply(response.data.reply || (typeof response.data === 'string' ? response.data : JSON.stringify(response.data)));
    } catch (error) {
      setError(error.message || 'Failed to generate reply');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Smart Email Assistant
      </Typography>

      <Box sx={{ mx: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Email Content"
          value={emailContent || ''}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Formal">Formal</MenuItem>
            <MenuItem value="Casual">Casual</MenuItem>
            <MenuItem value="Friendly">Friendly</MenuItem>
            <MenuItem value="Professional">Professional</MenuItem>
            <MenuItem value="Concise">Concise</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          disabled={loading || !emailContent.trim()}
        >
          {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
        </Button>

      </Box>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          Error: {error}
        </Typography>
      )}

      {generatedReply && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Generated Reply:
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            value={generatedReply || ''}
            InputProps={{
              readOnly: true,
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
            onClick={() => navigator.clipboard.writeText(generatedReply)}
          >
            Copy to Clipboard
          </Button>
        </Box>
      )}
    </Container>
  );
}

export default App;
