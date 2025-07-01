import { Typography } from '@mui/material';

const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <Typography color='error' sx={{ mb: 2 }}>
      {error}
    </Typography>
  );
};

export default ErrorMessage;