import axios from 'axios';
import {BASE_URL} from '../utils/utils';

export function fetchNewsListAPI() {
  return axios.get(BASE_URL);
}
