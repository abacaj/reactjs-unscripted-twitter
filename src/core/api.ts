import { QueryClient } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();
const fetcher = axios.create({
  baseURL: 'http://localhost:3001',
});

export { fetcher, queryClient };
