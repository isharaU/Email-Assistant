import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Container, Typography, Paper } from '@mui/material';
import EmailInputForm from './components/EmailInputForm';
import GeneratedReply from './components/GeneratedReply';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8080/api/email/generate', {
        emailContent,
        tone,
      });

      const result =
        typeof response.data === 'string'
          ? response.data
          : JSON.stringify(response.data);

      setGeneratedReply(result);
    } catch (err) {
      console.error(err);
      setError('Failed to generate email reply. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          backgroundColor: '#f9f9f9',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ textAlign: 'center', color: '#1976d2', fontWeight: 'bold', mb: 4 }}
        >
          Smart Email Assistant
        </Typography>

        <EmailInputForm
          emailContent={emailContent}
          setEmailContent={setEmailContent}
          tone={tone}
          setTone={setTone}
          onSubmit={handleSubmit}
          loading={loading}
        />

        <ErrorMessage error={error} />

        {generatedReply && (
          <GeneratedReply generatedReply={generatedReply} />
        )}
      </Paper>
    </Container>
  );
}

export default App;
