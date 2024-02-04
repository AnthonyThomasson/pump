import { User } from '@/hooks/useAuth';
import React, { useState } from 'react';
import { useStorageState } from './useStorageState';

const AuthContext = React.createContext<{
  signIn: (token: string, user: User) => void;
  signOut: () => void;
  session?: string | null;
  user: User | null;
  isLoading: boolean;
}>({
  signIn: (token: string) => null,
  signOut: () => null,
  session: null,
  user: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [user, setUser] = useState<null | User>(null);
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: (token: string, user: User) => {
          setUser(user);
          setSession(token);
        },
        signOut: () => {
          setUser(null);
          setSession(null);
        },
        session,
        user,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
