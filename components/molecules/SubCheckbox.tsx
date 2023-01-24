import { Checkbox } from '@mantine/core';
import { Dispatch, HTMLAttributes, SetStateAction } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  state: [boolean, Dispatch<SetStateAction<boolean>>];
  text?: string;
}
function SubCheckbox({
  children,
  text,
  state: [checked, setChecked],
  ...props
}: Props) {
  return (
    <Checkbox
      color="gray"
      size="xs"
      mt="md"
      ml="md"
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      styles={{
        label: {
          color: 'gray',
          fontWeight: 'normal',
        },
      }}
      label={children || text}
    />
  );
}

export default SubCheckbox;
