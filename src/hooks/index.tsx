import React from 'react';

import { AuthProvider } from './auth';

const ContextsProviders: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export { ContextsProviders };
