import { Center } from '@gluestack-ui/themed';

import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';
import LoginForm from './components/LoginForm';
export default function App() {
  return (
    <GluestackUIProvider config={config} colorMode="dark">
      <Center flex={1} $dark-bg="$secondary900" $light-bg="$secondary50">
        <LoginForm
          onSuccess={(loginToken: string) => {
            console.log('I am logged in with token: ', loginToken);
          }}
          onError={(error: string) => {
            console.log('I got an error: ', error);
          }}
        />
      </Center>
    </GluestackUIProvider>
  );
}
