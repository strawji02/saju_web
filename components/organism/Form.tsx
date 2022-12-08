import { TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import GenderSelector from '../molecules/GenderSelector';
import { StepInputFormType } from '../types/StepInput';

interface Props {
  step: number;
  form: UseFormReturnType<
    StepInputFormType,
    (values: StepInputFormType) => StepInputFormType
  >;
}

function Form({ step, form }: Props) {
  console.log(form.values);

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
      return <></>;
    case 4:
      return <></>;
    default:
      return <></>;
  }
}

export default Form;
