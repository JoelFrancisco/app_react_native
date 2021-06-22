import React, { createContext, useState, useContext } from 'react';

export const UserDataContext = createContext();

// eslint-disable-next-line react/prop-types
export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState({});

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserDataContext);
  const { userData, setUserData } = context;
  return { userData, setUserData };
}
