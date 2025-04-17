import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { baseUrl } from "./config";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = useCallback(async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/profile`, {
        withCredentials: true,
      });
      setUser(res.data.payload);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return { user, loading };
};
