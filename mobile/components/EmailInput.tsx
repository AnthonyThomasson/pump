import { AtSignIcon, Input, InputField, InputIcon, InputSlot } from '@gluestack-ui/themed';
import React from 'react';

export default function EmailInput(props: any) {
  const [email, setEmail] = React.useState('');
  return (
    <Input size={'xl'} variant={'rounded'} isInvalid={false} isDisabled={false} {...props}>
      <InputField
        onChange={(e: any) => {
          setEmail(e.nativeEvent.text);
        }}
        value={email}
        placeholder="Email"
        selectionColor={'$primary500'}
      />
      <InputSlot pr="$4">
        <InputIcon as={AtSignIcon} />
      </InputSlot>
    </Input>
  );
}
