import { Center, Text } from '@gluestack-ui/themed';
import { User } from '../hooks/useAuth';

export default function LandingPage(props: { token: string; user: User }) {
  return (
    <Center flex={1} $dark-bg="$secondary900" $light-bg="$secondary50">
      <Text>{`Name: ${props.user.firstName} ${props.user.lastName}`}</Text>
      <Text>{`Email: ${props.user.email}`}</Text>
    </Center>
  );
}
