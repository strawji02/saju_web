import instance from './instance';

export async function getDesctiprion(ilju: string) {
  const res = await instance.get('/description.php', {
    params: { ilju },
  });
  return res.data;
}
