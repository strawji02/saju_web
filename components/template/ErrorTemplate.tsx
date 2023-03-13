import { Button, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import Title from '../atoms/Title';

function ErrorTemplate() {
  const router = useRouter();
  return (
    <Stack>
      <Title text="생년월일 입력 오류입니다." align="center" c="dark" fz="20" />
      <Text mt="lg" align="center" c="dark">
        생년월일의 음력과 윤달이 맞는지 확인 후 다시 시도해주세요.
      </Text>
      <Button
        onClick={() => router.back()}
        mt="xl"
        mx="md"
        size="lg"
        radius="xl"
        variant="outline"
      >
        돌아가기
      </Button>
    </Stack>
  );
}

export default ErrorTemplate;
