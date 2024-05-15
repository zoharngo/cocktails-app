export type User = {
  name: string;
  email: string;
  picture: string;
};

export type UserContextType = {
  user: User | undefined;
  signOut: () => void;
  setUser: (user: User) => void;
};
