/* ----------- Axios ----------- */

import axios from 'axios';
import '../css/styles.css';

// export class MoviesApi {
//   constructor() {}

//   async getMovies() {
//     const BASE_URL = 'http://localhost:3000';
//     const END_POINT = '/movies';
//     const url = BASE_URL + END_POINT;

//     const response = await axios.get(url);
//     return response;
//   }
// }

const BASE_URL = 'http://localhost:3000';
const END_POINT = '/movies';
const url = BASE_URL + END_POINT;

export async function getMovies() {
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
}
