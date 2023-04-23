import { List } from '@mantine/core';
import DefaultText from '../atoms/DefaultText';
import UnderLinedDescription from './UnderLinedDescription';

export interface MarkDescriptionTextProps {
  resultStr: string;
}
const splitText = '\n \n\n ';

function MarkDescriptionText({
  resultStr,
  ...props
}: MarkDescriptionTextProps) {
  return (
    <DefaultText disallowDrag weight={500} size={17} align="left">
      <List>
        {resultStr.split(splitText).map((text, index) => (
          <UnderLinedDescription key={`res-description-${index}`}>
            {text}
          </UnderLinedDescription>
        ))}
      </List>
    </DefaultText>
  );
}

export default MarkDescriptionText;
