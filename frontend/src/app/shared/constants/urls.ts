import { environment } from "src/environments/environment";

const BASE_URL = 'http://localhost:5000';

export const HEROES_URL = BASE_URL + '/api/heroes';
export const HEROES_BY_SEARCH_URL = HEROES_URL + '/search/';
export const HERO_BY_ID_URL = HEROES_URL + '/';


export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';
