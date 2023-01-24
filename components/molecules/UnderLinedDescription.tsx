import { List } from '@mantine/core';
import { HTMLAttributes } from 'react';
import stringReplace from 'react-string-replace';
import UnderLinedText from '../atoms/UnderLinedText';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: string;
}

function UnderLinedDescription({ children, ...props }: Props) {
  const updatedString = stringReplace(
    children,
    /<mark>(.*?)<\/mark>/g,
    (match: string, i: number) => {
      return (
        <UnderLinedText key={`res-underline-text-${match}-${i}`}>
          {match}
        </UnderLinedText>
      );
    }
  );
  return (
    <List.Item py="sm" pr="md">
      {updatedString}
    </List.Item>
  );
}

export default UnderLinedDescription;
