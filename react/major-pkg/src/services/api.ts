import axios from "axios";
import { RootState, store } from "../app/store";
import { clearToken } from "../features/auth/authSlice";

export const client = axios.create();
export const API_URL = "https://example.com/api";
client.defaults.baseURL = API_URL;

export interface User {
  id: number;
  email: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  const res = await client.get<User[]>("/users");
  return res.data;
};

export interface Auth {
  token: string;
}

export const login = async (email: string, password: string): Promise<Auth> => {
  const res = await client.post<Auth>("/login", { email, password });
  return res.data;
};

client.interceptors.request.use((request) => {
  if (!request.headers) {
    return request;
  }
  let token = (store.getState() as RootState).auth.token;
  if (token) {
    request.headers!.auth = token;
  }

  return request;
});

client.interceptors.response.use((response) => {
  if (response.status === 403) {
    store.dispatch(clearToken());
  }
  return response;
});
