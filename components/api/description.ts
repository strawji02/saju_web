import axios from 'axios';

export async function getDesctiprion(ilju: string) {
  const res = await axios.get('https://server.saju60.com/description.php', {
    params: { ilju },
  });
  return res.data;
}
