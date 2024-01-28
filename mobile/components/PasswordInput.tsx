import { EyeIcon, EyeOffIcon, Input, InputField, InputIcon, InputSlot } from '@gluestack-ui/themed';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function PasswordInput({
  onChange,
  value,
  ...inputProps
}: {
  onChange: (email: string) => void;
  value: string;
  inputProps?: any;
}) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <Input size={'xl'} variant={'rounded'} isInvalid={false} isDisabled={false} {...inputProps}>
      <InputField
        onChange={(e) => onChange(e.nativeEvent.text)}
        value={value}
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
