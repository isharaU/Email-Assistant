import { Box, Button, TextField, Typography } from '@mui/material';

const GeneratedReply = ({ generatedReply }) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedReply);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant='h6' gutterBottom>
        Generated Reply:
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={6}
        variant='outlined'
        value={generatedReply || ''}
        inputProps={{ readOnly: true }}
      />
      
      <Button
        variant='outlined'
        sx={{ mt: 2 }}
        onClick={handleCopyToClipboard}
      >
        Copy to Clipboard
      </Button>
    </Box>
  );
};

export default GeneratedReply;