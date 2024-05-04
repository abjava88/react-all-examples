import React, { createContext, useState } from "react";

// Creating a context for managing user information
export const UserContext = createContext();

// A provider component to provide user data to its children
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = (username) => {
    setUser(username);
  };
  const logoutUser = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
