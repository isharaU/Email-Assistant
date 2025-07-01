import { useState } from 'react';
import './App.css';
import { Container, Typography } from '@mui/material';
import axios from 'axios';
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
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone 
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant='h3' component="h1" gutterBottom>
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
    </Container>
  );
}

export default App;