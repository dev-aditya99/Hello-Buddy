import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      console.log(import.meta.env.VITE_BACKEND_URL); // Debug log
      const newSocket = io(import.meta.env.VITE_BACKEND_URL, {
        query: {
          userId: authUser?._id,
        },
      });

      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      // Cleanup function: close socket only if it exists
      return () => {
        if (newSocket) {
          newSocket.close();
        }
      };
    } else if (socket) {
      // Only close the socket if it exists when authUser is null
      socket.close();
      setSocket(null);
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
