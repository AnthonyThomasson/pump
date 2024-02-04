import { Button, ButtonText, Center, Text } from '@gluestack-ui/themed';
import { useSession } from '../../ctx/SessionProvider';

export default function Index() {
  const { signOut, user } = useSession();

  console.log('user', user);
  return (
    <Center flex={1} $dark-bg="$secondary900" $light-bg="$secondary50">
      <Text>
        Name: {user?.firstName} {user?.lastName}
      </Text>
      <Text>Email: {user?.email}</Text>
      <Button onPress={() => signOut()}>
        <ButtonText>Sign Out</ButtonText>
      </Button>
    </Center>
  );
}
