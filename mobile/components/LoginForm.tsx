import { Box, Button, ButtonText, Center } from '@gluestack-ui/themed';
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
  return (
    <Box {...modifiers}>
      <EmailInput mt={10} />
      <PasswordInput mt={10} />
      <Center>
        <Button
          mt={20}
          maxWidth={150}
          onPress={() => console.log('I will login')}
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
