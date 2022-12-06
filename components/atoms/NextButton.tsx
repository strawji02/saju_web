import { Button } from '@mantine/core';
import Link from 'next/link';
import { UrlObject } from 'url';

interface Props {
  href: string | UrlObject;
  btnText: string;
  disabled: boolean;
}

function NextButton({ href, btnText, disabled }: Props) {
  return (
    <Button
      disabled={disabled}
      component={Link}
      href={href}
      sx={{ boxShadow: '3px 3px 9.62px 0 rgba(91, 91, 91, 0.61)' }}
      styles={{
        root: {
          '&[data-disabled]': {
            backgroundColor: '#c4c4c4',
            color: '#ffffff',
          },
        },
      }}
      mt="xs"
      radius="xl"
      size="xl"
    >
      {btnText}
    </Button>
  );
}

export default NextButton;
