import React, { createContext, useContext, useState } from 'react';

// Define the shape of the user data
interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  age: number;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  preferences: {
    notifications: boolean;
    darkMode: boolean;
    language: string;
  };
}

// Create a context for user data
const UserContext = createContext<{
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}>({ user: null, setUser: () => {} });

// Create a provider component
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
