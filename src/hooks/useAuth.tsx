import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { getApi } from '../services/api';
import { authRequest } from '../config/auth';

interface SignInCredentials {
  user: {
    email: string;
    password: string;
  };
  apiKey: string;
}

interface AuthState {
  token: string;
}

interface AuthContextData {
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthContextData);

  const signIn = useCallback(async () => {
    try {
      const api = getApi('userservice');
      const response = await api.post('tokens', authRequest);

      const {
        auth_response: { access_token: token },
      } = response.data;

      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        console.log(token);

        setData({ token });
      }
    } catch (error) {
      if (error.response) {
        console.error(error.response);
      } else {
        console.error(error.message);
      }
    }
  }, []);

  useEffect(() => {
    signIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ token: data.token, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  return context;
};

export { useAuth, AuthProvider };
