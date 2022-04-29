import React, { useContext } from 'react';
import { Env, WindowEnv } from '../../models';

export const EnvContext = React.createContext<Env | undefined>(undefined);

function useEnv(): Env {
  const env = useContext(EnvContext);
  /* istanbul ignore next */
  if (env === undefined) {
    throw new Error('useEnv must be used within a EnvProvider');
  }
  return env;
}

/**
 * Provides an instance of WindowEnv
 */
interface EnvProviderProps {
  children?: React.ReactNode;
}

function EnvProvider({ children }: EnvProviderProps) {
  return (
    <EnvContext.Provider value={new WindowEnv()}>
      {children}
    </EnvContext.Provider>
  );
}

export { EnvProvider, useEnv };
