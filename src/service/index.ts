import axios from 'axios';

const local = 'http://127.0.0.1:3333';

const api = axios.create({ baseURL: local });

export default api