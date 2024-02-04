import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Slot } from 'expo-router';
import { SessionProvider } from '../ctx/SessionProvider';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <GluestackUIProvider config={config} colorMode="dark">
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </GluestackUIProvider>
  );
}
