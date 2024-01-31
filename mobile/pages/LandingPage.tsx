import { Center, Text } from '@gluestack-ui/themed';

export default function LandingPage(props: any) {
  return (
    <Center flex={1} $dark-bg="$secondary900" $light-bg="$secondary50">
      <Text>Hi, I'm the landing page</Text>
    </Center>
  );
}
