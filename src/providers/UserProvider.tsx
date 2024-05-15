import { useState } from 'react';
import UserContext from '../contexts/UserContext';
import { User } from '../common/types/user';

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <UserContext.Provider
      value={{
        user,
        signOut: () => {
          setUser(undefined);
        },
        setUser: (user: User) => {
          setUser(user);
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
