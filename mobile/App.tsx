import { AtSignIcon, Center, EyeIcon, EyeOffIcon } from '@gluestack-ui/themed';

import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import {
  Button,
  ButtonText,
  GluestackUIProvider,
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from '@gluestack-ui/themed';
import React from 'react';
import { TouchableOpacity } from 'react-native';
export default function App() {
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  return (
    <GluestackUIProvider config={config}>
      <Center flex={1} bg="primary.500">
        <Input
          size={'xl'}
          variant={'rounded'}
          isInvalid={false}
          isDisabled={false}
          mt={10}
          marginHorizontal={50}
        >
          <InputField
            onChange={(e: any) => {
              setEmail(e.nativeEvent.text);
            }}
            value={email}
            placeholder="Email"
          />
          <InputSlot pr="$4">
            <InputIcon as={AtSignIcon} />
          </InputSlot>
        </Input>

        <Input
          size={'xl'}
          variant={'rounded'}
          isInvalid={false}
          isDisabled={false}
          mt={10}
          marginHorizontal={50}
        >
          <InputField
            onChange={(e: any) => {
              setPassword(e.nativeEvent.text);
            }}
            value={password}
            type={showPassword === true ? 'text' : 'password'}
            placeholder="Password"
          />
          <InputSlot pr="$4">
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <InputIcon as={showPassword === true ? EyeIcon : EyeOffIcon} />
            </TouchableOpacity>
          </InputSlot>
        </Input>

        <Button
          mt={10}
          onPress={() => console.log('I will login')}
          action={'primary'}
          variant={'solid'}
          size={'lg'}
          isDisabled={false}
        >
          <ButtonText>Login</ButtonText>
        </Button>
      </Center>
    </GluestackUIProvider>
  );
}
