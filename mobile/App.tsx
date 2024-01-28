import { Center } from '@gluestack-ui/themed';

import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';
import LoginForm, { User } from './components/LoginForm';
export default function App() {
  return (
    <GluestackUIProvider config={config} colorMode="dark">
      <Center flex={1} $dark-bg="$secondary900" $light-bg="$secondary50">
        <LoginForm
          onSuccess={(token: string, user: User) => {
            console.log(`I am ${user.firstName} ${user.lastName} and my token is ${token}`);
          }}
          onError={(error: string) => {
            debugger;
            console.log('I got an error: ', error);
          }}
        />
      </Center>
    </GluestackUIProvider>
  );
}
