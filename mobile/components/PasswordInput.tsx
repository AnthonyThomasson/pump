import { EyeIcon, EyeOffIcon, Input, InputField, InputIcon, InputSlot } from '@gluestack-ui/themed';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function PasswordInput(props: any) {
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <Input size={'xl'} variant={'rounded'} isInvalid={false} isDisabled={false} {...props}>
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
  );
}
