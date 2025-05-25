// import { Button } from '@mui/material';
// import { signInWithPopup } from 'firebase/auth';
// import { auth, googleProvider } from '../lib/firebase';

// const GoogleSignIn = () => {
//   const handleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Button variant="contained" onClick={handleSignIn}>
//       Sign in with Google
//     </Button>
//   );
// };

// export default GoogleSignIn;

'use client';

import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';

const GoogleSignIn = () => {
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      variant="contained"
      onClick={handleSignIn}
      startIcon={<GoogleIcon />}
      sx={{
        bgcolor: 'gradient.primary',
        '&:hover': {
          bgcolor: 'gradient.primaryHover',
        },
        borderRadius: '1rem',
        px: 4,
        py: 2,
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: 600,
        color: 'white',
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
      }}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleSignIn;
