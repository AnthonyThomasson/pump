import { Text, View } from 'react-native';

import { useSession } from '../../ctx/SessionProvider';

export default function Index() {
  const { signOut, user } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Welcome {user?.firstName} {user?.lastName}
      </Text>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}
      >
        Sign Out
      </Text>
    </View>
  );
}
