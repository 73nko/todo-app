import React from 'react';
import { ClientUser, useSession } from './useSession';

interface ISessionContext {
  isLogged: boolean;
  user: ClientUser | null;
  userLogin: (jwt: string, redirectTo: string) => void;
  logout: () => void;
}

const SessionContext = React.createContext({
  isLogged: false,
  user: null,
  userLogin: (_jwt: string, _redirectTo: string) => null,
  logout: () => null,
});
SessionContext.displayName = 'SessionContext';

const useSessionContext = (): ISessionContext => {
  const context = React.useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSessionContext must be used within a SessionProvider');
  }
  return context;
};

interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
}): React.ReactElement => {
  const context = useSession();

  return (
    <SessionContext.Provider value={context}>
      {children}
    </SessionContext.Provider>
  );
};

export default useSessionContext;
