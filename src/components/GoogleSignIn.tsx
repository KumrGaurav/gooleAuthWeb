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
      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full px-4 py-2 text-white text-lg font-semibold shadow-md"
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleSignIn;
