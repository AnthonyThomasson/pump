import { Box, Button, ButtonText, Center, useMedia } from '@gluestack-ui/themed';
import React from 'react';
import { User, useAuth } from '../hooks/useAuth';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

export default function LoginForm({
  onSuccess,
  onError,
  modifiers,
}: {
  onSuccess: (loginToken: string, user: User) => void;
  onError: (error: string) => void;
  modifiers?: any;
}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const media = useMedia();

  const { tryLogin } = useAuth();

  return (
    <Box {...modifiers} minWidth={media.md ? '20%' : '80%'}>
      <EmailInput
        onChange={(email: string) => setEmail(email)}
        value={email}
        inputProps={{ mt: 10 }}
      />
      <PasswordInput
        onChange={(password: string) => setPassword(password)}
        value={password}
        inputProps={{ mt: 10 }}
      />
      <Center>
        <Button
          mt={20}
          onPress={async () => {
            tryLogin(email, password)
              .then((result) => {
                if (result.token) {
                  onSuccess(result.token, result.user);
                } else {
                  onError('Unknown resopnse from server');
                }
              })
              .catch((error) => {
                onError(error);
              });
          }}
          action={'primary'}
          variant={'solid'}
          size={'lg'}
          isDisabled={false}
        >
          <ButtonText>Login</ButtonText>
        </Button>
      </Center>
    </Box>
  );
}
