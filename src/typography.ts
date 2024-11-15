import { defineTextStyles } from '@pandacss/dev';
import { CSSProperties } from 'react';

const textArgs: { [key: string]: CSSProperties } = {
  body: {
    fontWeight: '400',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.55',
  },
  stepper: {
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.55',
  },
  discription: {
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.55',
  },
  title: {
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.55',
  },
  list: {
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.55',
  },
  label: {
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.55',
  },
};

export const textStyles = defineTextStyles({
  body1: {
    description: 'The default text style 15px',
    value: {
      ...textArgs.body,
      fontFamily: 'var(--font-noto-sans-kr)',
      fontSize: '15px',
    },
  },
  body2: {
    description: 'The default text style 12px',
    value: {
      ...textArgs.body,
      fontFamily: 'var(--font-noto-sans-kr)',
      fontSize: '12px',
    },
  },
  body3: {
    description: 'The default text style 10px',
    value: {
      ...textArgs.body,
      fontFamily: 'var(--font-noto-sans-kr)',
      fontSize: '10px',
    },
  },
  button: {
    description: 'The button text style 20px',
    value: {
      ...textArgs.body,
      fontFamily: 'var(--font-noto-sans-kr)',
      fontSize: '20px',
    },
  },
  stepper: {
    description: 'The stepper text style 15px',
    value: {
      ...textArgs.stepper,
      fontFamily: 'var(--font-montserrat)',
      fontSize: '15px',
    },
  },
  discription1: {
    description: 'The discription text style montserrat',
    value: {
      ...textArgs.discription,
      fontFamily: 'var(--font-montserrat)',
      fontSize: '15px',
    },
  },
  discription2: {
    description: 'The discription text style haenam',
    value: {
      ...textArgs.discription,
      fontFamily: 'var(--font-haenam)',
      fontSize: '15px',
    },
  },
  title1: {
    description: 'The title text style 28px',
    value: {
      ...textArgs.title,
      fontFamily: 'var(--font-jalnan)',
      fontSize: '28px',
    },
  },
  title2: {
    description: 'The title text style 22px',
    value: {
      ...textArgs.title,
      fontFamily: 'var(--font-jalnan)',
      fontSize: '22px',
    },
  },
  title3: {
    description: 'The title text style 18px',
    value: {
      ...textArgs.title,
      fontFamily: 'var(--font-jalnan)',
      fontSize: '18px',
    },
  },
  'list-bold': {
    description: 'The list bold text style',
    value: {
      ...textArgs.body,
      fontFamily: 'var(--font-noto-sans-kr)',
      fontSize: '17px',
      fontWeight: 'bold',
    },
  },
  'list-normal': {
    description: 'The list normal text style',
    value: {
      ...textArgs.body,
      fontFamily: 'var(--font-noto-sans-kr)',
      fontSize: '16px',
    },
  },
  label: {
    description: 'The label text style 16px',
    value: {
      ...textArgs.label,
      fontFamily: 'var(--font-haenam)',
      fontSize: '16px',
    },
  },
  'label-button': {
    description: 'The label button text style 16px',
    value: {
      ...textArgs.label,
      fontFamily: 'var(--font-haenam)',
      fontSize: '16px',
      textDecoration: 'underline',
    },
  },
});
