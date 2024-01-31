import '@expo/metro-runtime';

import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { useAuth } from './hooks/useAuth';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
export default function App() {
  const { loggedIn } = useAuth();

  return (
    <GluestackUIProvider config={config} colorMode="dark">
      {loggedIn ? <LandingPage /> : <LoginPage />}
    </GluestackUIProvider>
  );
}
