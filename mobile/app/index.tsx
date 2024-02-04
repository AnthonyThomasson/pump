import '@expo/metro-runtime';

import { User } from '@/hooks/useAuth';
import LoginPage from '@/pages/LoginPage';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { useState } from 'react';
export default function Page() {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  return (
    <GluestackUIProvider config={config} colorMode="dark">
      <LoginPage
        onLogin={(token: string, user: User) => {
          setToken(token);
          setUser(user);
        }}
      />
    </GluestackUIProvider>
  );
}
