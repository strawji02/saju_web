import {
  Checkbox,
  Input,
  MantineProvider,
  MantineThemeOverride,
  Modal,
  ModalStylesNames,
  Stack,
  Styles,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { DatePicker, DatePickerStylesNames } from '@mantine/dates';
import { UseFormReturnType } from '@mantine/form';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { SetStateAction } from 'react';
import { Dispatch, useEffect, useState } from 'react';
import { jalnan } from '../../utils/fonts';
import { dateIsValid, loremIpsem, timeParser } from '../../utils/utils';
import TimePicker from '../@shared/ios-time-picker/TimePicker';
import { StepInputFormType } from '../types/StepInput';

interface Props {
  form: UseFormReturnType<
    StepInputFormType,
    (values: StepInputFormType) => StepInputFormType
  >;
}

const datePickerTheme: Styles<DatePickerStylesNames, Record<string, any>> = (
  theme
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
  body: {
    padding: 22,
  },
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
  const router = useRouter();
  const routerModalOpened = router.query['modal'];

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

  return (
    <>
      <MantineProvider theme={providerTheme} inherit>
        <Stack spacing={25} style={{ textAlign: 'left' }}>
          <Input
            size="lg"
            radius="md"
            type="date"
            min="1938-01-01"
            max="2050-12-31"
            {...form.getInputProps('birthDate')}
          />
          <Input
            size="lg"
            radius="md"
            type="time"
            {...form.getInputProps('birthTime')}
          />
          <Checkbox
            size="lg"
            mt={'xs'}
            label="음력생일이에요."
            w={'100%'}
            {...form.getInputProps('calendar')}
          />
          <Checkbox
            mb={'xl'}
            size="lg"
            label="윤달입니다."
            {...form.getInputProps('intercalation')}
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
            }}
            align="center"
            className={jalnan.className}
          >
            {modalType}
          </Text>
        }
        fullScreen
        styles={modalTheme}
      >
        {loremIpsem}
      </Modal>
    </>
  );
}

export default BirthInput;
