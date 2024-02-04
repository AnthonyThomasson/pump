import { router } from 'expo-router';

import { User } from '@/hooks/useAuth';
import LoginPage from '@/pages/LoginPage';
import { useSession } from '../ctx/SessionProvider';

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <LoginPage
      onLogin={(token: string, user: User) => {
        signIn(token, user);
        router.replace('/');
      }}
    />
  );
}
