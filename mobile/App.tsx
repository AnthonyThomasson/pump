import { ButtonText } from '@gluestack-ui/themed';

import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import {
  Box,
  Button,
  GluestackUIProvider,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';
export default function App() {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <GluestackUIProvider config={config}>
      <Box width="100%" justifyContent="center" alignItems="center">
        <Text>Open up App.js to start working on your app!</Text>

        <Input size={'xl'} variant={'rounded'} isInvalid={false} isDisabled={false}>
          <InputField
            onChange={(e: any) => {
              setEmail(e.nativeEvent.text);
            }}
            value={email}
            placeholder="Email"
          />
          <InputSlot pr="$4">
            <InputIcon as={SearchIcon} />
          </InputSlot>
        </Input>

        <Input size={'xl'} variant={'rounded'} isInvalid={false} isDisabled={false}>
          <InputField
            onChange={(e: any) => {
              setPassword(e.nativeEvent.text);
            }}
            value={password}
            type="password"
            placeholder="Password"
          />
          <InputSlot pr="$4">
            <InputIcon as={SearchIcon} />
          </InputSlot>
        </Input>

        <Button
          onPress={() => console.log('I will login')}
          action={'primary'}
          variant={'solid'}
          size={'lg'}
          isDisabled={false}
        >
          <ButtonText>Login</ButtonText>
        </Button>
      </Box>
    </GluestackUIProvider>
  );
}
