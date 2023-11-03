import { createContext, useContext, useEffect, useState } from "react";
import { useRefreshToken } from "../hooks/useRefreshToken";

const authContext = createContext();
const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const refresh = useRefreshToken();
  useEffect(() => {
    (async () => {
      await refresh();
    })();
  }, []);
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
