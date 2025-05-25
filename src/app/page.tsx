'use client';

import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import GoogleSignIn from '../components/GoogleSignIn';
import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';

export default function Home() {
  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {user ? (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-extrabold text-white shadow-lg p-5 bg-opacity-70 rounded-lg">
            Welcome, {user.displayName}!
          </h1>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <div className="p-10 bg-white rounded-xl shadow-xl transition-transform transform hover:scale-105">
          <GoogleSignIn />
        </div>
      )}
    </div>
  );
}
