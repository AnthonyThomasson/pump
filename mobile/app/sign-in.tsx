import { router } from 'expo-router';

import { User } from '@/hooks/useAuth';
import { useSession } from '../ctx/SessionProvider';

import { Center } from '@gluestack-ui/themed';
import LoginForm from '../components/LoginForm';

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <Center flex={1} $dark-bg="$secondary900" $light-bg="$secondary50">
      <LoginForm
        onSuccess={(token: string, user: User) => {
          signIn(token, user);
          router.replace('/');
        }}
        onError={(error: string) => {
          console.log('I got an error: ', error);
        }}
      />
    </Center>
  );
}
