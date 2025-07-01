import { Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const EmailInputForm = ({ 
  emailContent, 
  setEmailContent, 
  tone, 
  setTone, 
  onSubmit, 
  loading 
}) => {
  return (
    <Box sx={{ mx: 3 }}>
      <TextField 
        fullWidth
        multiline
        rows={6}
        variant='outlined'
        label="Original Email Content"
        value={emailContent || ''}
        onChange={(e) => setEmailContent(e.target.value)}
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Tone (Optional)</InputLabel>
        <Select
          value={tone || ''}
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
        variant='contained'
        onClick={onSubmit}
        disabled={!emailContent || loading}
        fullWidth
      >
        {loading ? <CircularProgress size={24} /> : "Generate Reply"}
      </Button>
    </Box>
  );
};

export default EmailInputForm;