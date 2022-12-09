import axios from 'axios';
import { ResultParams } from './../types/StepInput';
export async function getResult(params: ResultParams) {
  const response = await axios.get('//server.saju60.com/result5.php', {
    params,
  });
  return response.data;
}
