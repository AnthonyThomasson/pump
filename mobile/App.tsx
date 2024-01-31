import '@expo/metro-runtime';

import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { useState } from 'react';
import { User } from './hooks/useAuth';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
export default function App() {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  return (
    <GluestackUIProvider config={config} colorMode="dark">
      {token && user ? (
        <LandingPage token={token} user={user} />
      ) : (
        <LoginPage
          onLogin={(token: string, user: User) => {
            setToken(token);
            setUser(user);
          }}
        />
      )}
    </GluestackUIProvider>
  );
}
