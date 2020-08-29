import { API_KEY } from '../../__secret__/fred-api';
import fetch from 'node-fetch'
const URL = `https://api.stlouisfed.org/fred/category?category_id=125&api_key=${API_KEY}&file_type=json`;

export const get = async (cb: (arg: Body) => void) => {
    const response = await fetch(URL);
    const json = await response.json();
    cb(json);
}