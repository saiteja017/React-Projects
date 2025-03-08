import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [allUsers, setAllUsers] = useState([
    { userId: "user1", password: "123" },
    { userId: "user2", password: "123" },
  ]);
  
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        allUsers,
        setAllUsers,
        logout,
        messages,
        addMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
