import {
  Button,
  Center,
  Grid,
  Radio,
  RadioGroup,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useUserState } from '../../store/store';

const Name = () => {
  const form = useForm({
    initialValues: { name: '', gender: 1 },
    validate: (values) => ({
      name: values.name.length < 2 ? 'Too short name' : null,
    }),
  });
  const { setName, setGender } = useUserState();
  return (
    <Grid justify="center" align="center">
      <form
        style={{ width: '100%' }}
        onSubmit={form.onSubmit((values) => {
          setName(values.name);
          setGender(values.gender);
        })}
      >
        <Grid.Col>
          <Center style={{ height: '40vh' }}>
            <TextInput
              label="당신의 이름은?"
              // value={form.values.name}
              // onChange={(event) =>
              //   form.setFieldValue('name', event.currentTarget.value)
              // }
              style={{
                width: '100%',
              }}
              radius="xs"
              required
              {...form.getInputProps('name')}
            />
          </Center>
        </Grid.Col>
        <Grid.Col>
          <Center style={{ height: '40vh' }}>
            <RadioGroup
              label="당신의 성별은?"
              value={`${form.values.gender}`}
              onChange={(event) =>
                form.setFieldValue('gender', parseInt(event))
              }
              // style={{ width: '100%' }}
              required
            >
              <Radio value="1" label="남자" />
              <Radio value="2" label="여자" />
            </RadioGroup>
          </Center>
        </Grid.Col>
        <Grid.Col>
          <Center style={{ height: '20vh' }}>
            <Button type="submit" style={{ width: '100%' }}>
              Next
            </Button>
          </Center>
        </Grid.Col>
      </form>
    </Grid>
  );
};

export default Name;
