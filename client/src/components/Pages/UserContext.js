import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    authenticated: false
  });

  const updateUser = (name, value) => {
    setUser({...user, [name]: value})
  }

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};


export { UserContext };
export { UserProvider };

