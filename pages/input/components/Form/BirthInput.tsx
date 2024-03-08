import {
  Checkbox,
  MantineProvider,
  MantineThemeOverride,
  Modal,
  ModalStylesNames,
  NumberInput,
  Stack,
  Styles,
  Text,
  TextInput,
} from '@mantine/core';
import { DatePickerStylesNames } from '@mantine/dates';
import { UseFormReturnType } from '@mantine/form';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { StepInputFormType } from '../../../../utils/types';
import { privacy, term } from '../../../../utils/utils';
import InputLabelText from './InputLabelText';
import SubCheckbox from './SubCheckbox';

interface Props {
  form: UseFormReturnType<
    StepInputFormType,
    (values: StepInputFormType) => StepInputFormType
  >;
}

const datePickerTheme: Styles<DatePickerStylesNames, Record<string, any>> = (
  theme,
) => ({
  calendarHeader: {
    backgroundColor: '#455399',
    margin: -22,
    marginBottom: 20,
    borderRadius: '10px 10px 0 0',
    padding: 10,
    paddingTop: 14,
  },
  calendarHeaderLevel: {
    color: 'white',
    ':hover': {
      backgroundColor: theme.fn.rgba('#8293e8', 0.25),
    },
  },
  calendarHeaderControl: {
    ':hover': {
      backgroundColor: theme.fn.rgba('#8293e8', 0.25),
      borderRadius: '10px',
    },
  },
  root: {
    textAlign: 'left',
  },
  required: {
    backgroundColor: 'red',
  },
});

const modalTheme: Styles<ModalStylesNames, Record<string, any>> = (theme) => ({
  modal: {
    backgroundColor: '#f5f5f5',
    padding: '0px !important',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 33,
    padding: 22,
    width: '100%',
    borderBottom: 'solid',
    borderBottomColor: '#dbdbdb',
    borderBottomWidth: 2,
  },
  title: {
    textAlign: 'center',
    flex: 1,
    marginRight: 0,
    fontSize: 28,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    color: 'black',
  },
  body: { whiteSpace: 'pre-line', padding: 22 },
});

const providerTheme: MantineThemeOverride = {
  components: {
    Text: {
      styles: {
        root: {
          color: 'black',
        },
      },
    },
    Paper: {
      styles: {
        root: {
          borderRadius: 15,
        },
      },
    },
    Modal: {
      defaultProps: {
        centered: true,
      },
      styles: (theme) => ({
        modal: {
          backgroundColor: '#ffffff',
        },
      }),
    },
    Checkbox: {
      styles: {
        label: {
          fontSize: 15,
          fontWeight: 600,
          fontStretch: 'normal',
          fontStyle: 'normal',
        },
      },
    },
  },
  globalStyles: (theme) => ({
    ...theme.globalStyles,
  }),
};

function ServiceLabel({
  setIsModalOpen,
  setModalType,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalType: Dispatch<SetStateAction<string | undefined>>;
}) {
  return (
    <Text>
      <Text
        span
        td="underline"
        style={{ cursor: 'pointer' }}
        onClick={(e: any) => {
          e.preventDefault();
          setIsModalOpen(true);
          setModalType('서비스 이용약관');
        }}
      >
        서비스 이용약관
      </Text>{' '}
      및{' '}
      <Text
        span
        td="underline"
        style={{ cursor: 'pointer' }}
        onClick={(e: any) => {
          e.preventDefault();
          setIsModalOpen(true);
          setModalType('개인정보처리방침');
        }}
      >
        개인정보처리방침
      </Text>{' '}
      에 동의합니다.
    </Text>
  );
}

function BirthInput({ form }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string>();
  const state = useState(false);
  const [checked] = state;

  const router = useRouter();
  const routerModalOpened = router.query['modal'];

  const startYear = 1938;
  const endYear = new Date().getFullYear(); // get the current year

  const yearArray = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => `${startYear + index}`,
  );

  useEffect(() => {
    if (!!isModalOpen !== !!routerModalOpened) {
      if (isModalOpen)
        router.push({
          query: { ...router.query, modal: 'open' },
        });
      else {
        router.push({
          query: _.omit(router.query, ['modal']),
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  useEffect(() => {
    if (!!isModalOpen !== !!routerModalOpened) {
      setIsModalOpen(!!routerModalOpened);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routerModalOpened]);

  useEffect(() => {
    if (checked) {
      form.setValues({ birthTime: '10:00' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  // useEffect(() => {
  //   if (!form.values.calendar) {
  //     form.setValues({ intercalation: false });
  //     form.setValues({ birthTime: '20:00' });
  //     console.log(form.getInputProps('intercalation'));
  //   }
  // }, [form.values.calendar]);

  return (
    <>
      <MantineProvider theme={providerTheme} inherit>
        <Stack spacing={25} style={{ textAlign: 'left' }}>
          {/* <TextInput
            size="lg"
            radius="md"
            type="date"
            min="1938-01-01"
            max="2050-12-31"
            label={<InputLabelText text="생년월일" />}
            {...form.getInputProps('birthDate')}
          /> */}
          {/* <NativeSelect
            data={yearArray}
            label="Select your favorite framework/library"
            description="This is anonymous"
            withAsterisk
          /> */}
          <NumberInput
            size="lg"
            radius="md"
            hideControls
            placeholder="20000101"
            // parser={(value) => value?.replace(/\./g, '')}
            // formatter={(value) =>
            //   !Number.isNaN(parseFloat(value || '')) && value
            //     ? value.substring(0, 4) + "-" + value.substring(4, 6) + "-" + value.substring(6, 8)
            //     : ''
            // }
            label={<InputLabelText text="생년월일" />}
            {...form.getInputProps('birthDate')}
            onChange={(val) => form.setValues({ birthDate: val?.toString() })}
          />

          <TextInput
            size="lg"
            radius="md"
            type="time"
            label={<InputLabelText text="시간" />}
            {...form.getInputProps('birthTime')}
            disabled={checked}
            description={
              <SubCheckbox state={state} text="태어난 시간을 잘 모르겠어요." />
            }
            inputWrapperOrder={['label', 'input', 'description']}
          />
          <Checkbox
            size="lg"
            mt={'xs'}
            label="음력생일이에요."
            w={'100%'}
            {...form.getInputProps('calendar')}
            onChange={(e) => {
              form.getInputProps('calendar').onChange(e.target.checked);
              form.setValues({ intercalation: false });
            }}
          />
          <Checkbox
            mb={'xl'}
            size="lg"
            label="음력 윤달입니다."
            {...form.getInputProps('intercalation')}
            checked={form.getInputProps('intercalation').value}
            disabled={!form.values.calendar}
          />
          <Checkbox
            size="lg"
            label={
              <ServiceLabel
                setIsModalOpen={setIsModalOpen}
                setModalType={setModalType}
              />
            }
            {...form.getInputProps('termsOfService')}
          />
        </Stack>
      </MantineProvider>
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          <Text
            sx={{
              color: 'black',
              fontFamily: 'Jalnan',
            }}
            align="center"
          >
            {modalType}
          </Text>
        }
        fullScreen
        styles={modalTheme}
      >
        {modalType === '개인정보처리방침' ? privacy : term}
      </Modal>
    </>
  );
}

export default BirthInput;
