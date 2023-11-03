import axios from "../axios";
import { useAuth } from "../context/authContext";

export const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/api/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      return {
        ...prev,
        name: response.data.name,
        accessToken: response.data.accessToken,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};
