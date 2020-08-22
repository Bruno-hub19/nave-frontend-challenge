import React, { createContext, useCallback, useState, useContext } from 'react';

import { api } from '../services/api';

interface AuthState {
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextFormat {
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextFormat>({} as AuthContextFormat);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Nave:token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      return { token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/users/login', { email, password });

    const { token } = response.data;

    localStorage.setItem('@Nave:token', token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setData({ token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Nave:token');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ token: data.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextFormat {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
