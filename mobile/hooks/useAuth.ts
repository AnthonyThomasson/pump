import React from 'react';
import { useFetch } from './useFetch';

export const useAuth = () => {
  let [loggedIn, setLoggedIn] = React.useState(false);
  loggedIn = loggedIn;
  setLoggedIn = setLoggedIn;

  return {
    loggedIn,
    tryLogin: async (email: string, password: string): Promise<LoginResponse> => {
      try {
        let response = await login(email, password);
        console.log('Login response ');
        setLoggedIn(true);
        return response;
      } catch (err) {
        console.log('Login error ', err);
        throw err;
      }
    },
  };
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

type LoginResponse = {
  token: string;
  user: User;
};
type LoginErrorResponse = {
  message: string;
};

const login = async (email: string, password: string): Promise<LoginResponse> => {
  const { post } = useFetch();
  const response = await post('login', { email, password });
  if (response.ok) {
    let resp = await response.json();
    let loginResponse = resp as LoginResponse;
    if (loginResponse.token) {
      return loginResponse;
    }
    let loginErrorResponse = resp as LoginErrorResponse;
    if (loginErrorResponse.message) {
      throw new Error(loginErrorResponse.message);
    }
  }
  throw new Error('Something went wrong');
};
