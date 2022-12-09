import { MantineProvider, Stack, Text, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { UseFormReturnType } from '@mantine/form';
import BirthPlaceSelector from '../molecules/BirthPlaceSelector';
import GenderSelector from '../molecules/GenderSelector';
import BirthInput from './BirthInput';
import { Dosi, StepInputFormType } from '../types/StepInput';
import 'dayjs/locale/ko';

interface Props {
  step: number;
  form: UseFormReturnType<
    StepInputFormType,
    (values: StepInputFormType) => StepInputFormType
  >;
}

function Form({ step, form }: Props) {
  switch (step) {
    case 1:
      return (
        <TextInput
          placeholder="이름을 입력해주세요"
          size="lg"
          radius="md"
          {...form.getInputProps('name')}
        />
      );
    case 2:
      return (
        <>
          <GenderSelector form={form} />
        </>
      );
    case 3:
      return (
        <>
          <BirthPlaceSelector form={form} />
        </>
      );
    case 4:
      return (
        <>
          <BirthInput form={form} />
        </>
      );
    default:
      return <></>;
  }
}

export default Form;
