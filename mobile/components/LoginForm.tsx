import { Box, Button, ButtonText, Center } from '@gluestack-ui/themed';
import React from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

export default function LoginForm({
  onSuccess,
  onError,
  ...modifiers
}: {
  onSuccess: (loginToken: string) => void;
  onError: (error: string) => void;
  modifiers?: any;
}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Box {...modifiers}>
      <EmailInput
        onChange={(email: string) => setEmail(email)}
        value={email}
        inputProps={{ mt: 5 }}
      />
      <PasswordInput
        onChange={(password: string) => setPassword(password)}
        value={password}
        inputProps={{ mt: 5 }}
      />
      <Center>
        <Button
          mt={20}
          maxWidth={150}
          onPress={() => {
            login(email, password)
              .then((loginToken) => onSuccess(loginToken))
              .catch((error) => onError(error));
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

type LoginResponse = {
  token: string;
};
type LoginErrorResponse = {
  message: string;
};

const login = async (email: string, password: string): Promise<string> => {
  let response = await fetch('https://www.example.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  if (response.ok) {
    let resp = await response.json();
    let loginResponse = resp as LoginResponse;
    if (loginResponse.token) {
      return loginResponse.token;
    }
    let loginErrorResponse = resp as LoginErrorResponse;
    if (loginErrorResponse.message) {
      throw new Error(loginErrorResponse.message);
    }
  }
  throw new Error('Something went wrong');
};
