import { Text, TextProps } from '@mantine/core';

interface Props extends TextProps {}

function UnderLinedText({ children, ...props }: Props) {
  return (
    <Text
      component="span"
      c="dark"
      sx={(theme) => ({
        boxShadow: `inset 0 -0.55em 0 0 ${theme.fn.rgba('#2d2da8', 0.18)}`,
      })}
      {...(!props.inherit && { fz: 17, ff: 'NotoSansCJKKR', fw: 'bold' })}
      {...props}
    >
      {children}
    </Text>
  );
}

export default UnderLinedText;
