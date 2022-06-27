import { Autocomplete, Button, Center, Checkbox, Grid } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import {
  BirthDate,
  Birthplace,
  Calendar,
  Intercalation,
  useSajuState,
  useUserState,
} from '../../store/store';
import shallow from 'zustand/shallow';
import { useEffect, useRef } from 'react';

interface FormValues {
  birthplace: Birthplace;
  calendar: Calendar;
  birthDay: BirthDate;
  birthHour: BirthDate;
  intercalation: Intercalation;
}
const Birth = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { setSaju } = useSajuState();
  const submitMutate = useMutation(
    (params: any) => axios.get('//35.84.255.61:8000/result5.php', { params }),
    {
      onSuccess: (res) => {
        console.log(res);

        setSaju(res.data);
        router.push('/result/info');
      },
    }
  );
  const dataValueArr = data.map((d: any) => d.value);
  const form = useForm<FormValues>({
    initialValues: {
      birthplace: '',
      calendar: 'solar',
      birthDay: new Date(),
      birthHour: new Date(),
      intercalation: false,
    },
    validate: (values) => ({
      birthplace: dataValueArr.includes(values.birthplace)
        ? null
        : '목록에서 선택해주세요',
    }),
  });
  const { setBirth, ...user } = useUserState();
  const birthRef = useRef(useUserState.getState().birth);

  useEffect(
    () =>
      useUserState.subscribe(
        (state) => (birthRef.current = state.birth),
        (state, prevState) => {
          const params = {
            gender: user.gender === 1 ? '남자' : '여자',
            birthplace: state.birthplace,
            calendar: state.calendar === 'lunar' ? '음력' : '양력',
            year: state.birthDay.getFullYear(),
            month: state.birthDay.getMonth() + 1,
            day: state.birthDay.getDate(),
            hour: state.birthHour.getHours(),
            min: state.birthHour.getMinutes(),
            intercalation: state.intercalation ? '윤달' : null,
          };

          submitMutate.mutate(params);
        },
        { equalityFn: shallow }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Grid justify="center" align="center">
      <form
        style={{ width: '100%' }}
        onSubmit={form.onSubmit((values) => {
          setBirth({ ...values });
        })}
      >
        <Grid.Col style={{ height: '40vh' }}>
          <Center style={{ height: '100%' }}>
            <Autocomplete
              dropdownComponent="div"
              maxDropdownHeight="30vh"
              label="출생지"
              data={data}
              style={{ width: '100%' }}
              limit={42}
              {...form.getInputProps('birthplace')}
              required
            />
          </Center>
        </Grid.Col>
        <Grid.Col style={{ height: '40vh' }}>
          <Center style={{ height: '20vh' }}>
            <DatePicker
              allowFreeInput
              inputFormat="YYYY.MM.DD"
              labelFormat="YYYY.MM"
              clearable={false}
              style={{ width: '100%' }}
              label="생년월일"
              firstDayOfWeek="sunday"
              {...form.getInputProps('birthDay')}
            />
          </Center>

          <Grid style={{ width: '100%' }}>
            <Grid.Col span={6}>
              <Center style={{ height: '100%' }}>
                <TimeInput
                  style={{ width: '100%' }}
                  {...form.getInputProps('birthHour')}
                />
              </Center>
            </Grid.Col>
            <Grid.Col span={3}>
              <Center style={{ height: '100%' }}>
                <Checkbox
                  // style={{ marginTop: '20px' }}
                  label="음력"
                  checked={form.values.calendar === 'lunar'}
                  onChange={(event) =>
                    form.setFieldValue(
                      'calendar',
                      event.currentTarget.checked ? 'lunar' : 'solar'
                    )
                  }
                />
              </Center>
            </Grid.Col>
            <Grid.Col span={3}>
              <Center style={{ height: '100%' }}>
                <Checkbox
                  label="윤달"
                  disabled={form.values.calendar === 'solar'}
                  {...form.getInputProps('intercalation')}
                  // checked={form.values.intercalation}
                  // onChange={(event) => form.setFieldValue('intercalation', event.currentTarget.checked)}
                />
              </Center>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col style={{ height: '20vh' }}>
          <Center style={{ height: '100%' }}>
            <Button type="submit" style={{ width: '100%' }}>
              Submit
            </Button>
          </Center>
        </Grid.Col>
      </form>
    </Grid>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('http://35.84.255.61:8000/dosi.php');
  const resData = await res.data.split('\n');
  const data = resData
    .map((d: string) => {
      if (d !== '') {
        return JSON.parse(d);
      }
      return null;
    })
    .filter((d: string) => d);

  return { props: { data } };
};

export default Birth;
