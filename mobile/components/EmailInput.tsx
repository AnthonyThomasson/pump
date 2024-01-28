import { AtSignIcon, Input, InputField, InputIcon, InputSlot } from '@gluestack-ui/themed';
import React from 'react';

export default function EmailInput({
  onChange,
  value,
  ...inputProps
}: {
  onChange: (email: string) => void;
  value: string;
  inputProps?: any;
}) {
  return (
    <Input size={'xl'} variant={'rounded'} isInvalid={false} isDisabled={false} {...inputProps}>
      <InputField
        onChange={(e) => onChange(e.nativeEvent.text)}
        value={value}
        placeholder="Email"
      />
      <InputSlot pr="$4">
        <InputIcon as={AtSignIcon} />
      </InputSlot>
    </Input>
  );
}
