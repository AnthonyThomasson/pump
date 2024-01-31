import { Center } from '@gluestack-ui/themed';
import LoginForm from '../components/LoginForm';
import { User } from '../hooks/useAuth';

export default function LoginPage(props: { onLogin: (loginToken: string, user: User) => void }) {
  return (
    <Center flex={1} $dark-bg="$secondary900" $light-bg="$secondary50">
      <LoginForm
        onSuccess={(token: string, user: User) => props.onLogin(token, user)}
        onError={(error: string) => {
          console.log('I got an error: ', error);
        }}
      />
    </Center>
  );
}
