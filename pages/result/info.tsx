import { Button, Center, Grid, Text } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Birth, SajuData, useSajuState, useUserState } from '../../store/store';

interface UserData extends Partial<Birth>, Partial<SajuData> {
  name: string;
  gender: number;
  age: number;
}

const useData = () => {
  const { data } = useSajuState();
  const { name, birth, gender } = useUserState();
  return { data, name, birth, gender };
};

const Info = () => {
  const router = useRouter();
  const { data, name, birth, gender } = useData();

  const [userData, setuserData] = useState<UserData>();
  useEffect(() => {
    const today = new Date();
    const birthYear = new Date(birth.birthDay).getFullYear();
    setuserData({
      gender,
      name,
      age: today.getFullYear() - birthYear,
      birthplace: birth.birthplace,
      lunar: data.lunar,
      lunar_ss: data.lunar_ss,
      solar: data.solar,
      year: data.year,
      month: data.month,
      day: data.day,
      time: data.time,
      year_kr: data.year_kr,
      month_kr: data.month_kr,
      day_kr: data.day_kr,
      time_kr: data.time_kr,
      res_str: data.res_str,
    });
  }, [data, name, birth, gender]);

  // console.log(data);
  return (
    <Grid>
      <Grid.Col>
        <Text component="div">
          이름(별명) : {userData?.name} ({userData?.age},
          {userData?.gender === 1 ? '남' : '여'})
        </Text>
      </Grid.Col>
      <Grid.Col>
        <Text component="div">출생지 : {userData?.birthplace}</Text>
      </Grid.Col>
      <Grid.Col>
        <Text component="div">양력 생년월일 : {userData?.solar}</Text>
      </Grid.Col>
      <Grid.Col>
        <Text component="div">음력 생년월일 : {userData?.lunar}</Text>
      </Grid.Col>
      <Grid.Col>
        <Text>
          연주 : {userData?.year} {userData?.year_kr}
        </Text>
      </Grid.Col>
      <Grid.Col>
        <Text>
          월주 : {userData?.month} {userData?.month_kr}
        </Text>
      </Grid.Col>
      <Grid.Col>
        <Text>
          일주 : {userData?.day} {userData?.day_kr}
        </Text>
      </Grid.Col>
      <Grid.Col>
        <Text>
          시주 : {userData?.time} {userData?.time_kr}
        </Text>
      </Grid.Col>
      <Grid.Col
        style={{
          height: '50vh',
          overflow: 'scroll',
          backgroundColor: '#999999',
        }}
      >
        <Text color="black">
          {userData?.res_str &&
            userData.res_str.split('\n').map((line, index) => (
              <Text key={index}>
                {line} <br />
              </Text>
            ))}
        </Text>
      </Grid.Col>
      <Grid.Col style={{ paddingTop: 30 }}>
        <Grid>
          <Grid.Col span={6}>
            <Center>
              <Button
                style={{ width: '100%' }}
                onClick={() => {
                  router.push('/');
                }}
              >
                처음으로
              </Button>
            </Center>
          </Grid.Col>
          <Grid.Col span={6}>
            <Center>
              <Button style={{ width: '100%' }}>공유하기</Button>
            </Center>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};

export default Info;
