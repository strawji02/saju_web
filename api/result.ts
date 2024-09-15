import { ResultParams } from '../utils/types';
import instance from './instance';
export async function getResult(params: ResultParams) {
  const response = await instance.get('/result5.php', {
    params,
  });
  return response.data;
}
