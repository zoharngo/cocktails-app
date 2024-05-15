import { createContext } from 'react';
import { UserContextType } from '../common/types/user';

const userContext = createContext<UserContextType>({
  user: undefined,
  signOut: () => {},
  setUser: () => {},
});

export default userContext;
