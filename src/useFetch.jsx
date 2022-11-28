import { useState, useEffect } from "react";
import axios from "axios";
// ==========================================================================
export const useFetch = (url) => {
  const [address, setAdress] = useState({
    data: null,
    isLoading: false,
    Error: null,
  });
  useEffect(() => {
    async function fetchUrl() {
      setAdress((prev) => {
        return { ...prev, isLoading: true };
      });

      try {
        const { data } = await axios.get(url);
        setAdress((prev) => {
          return { ...prev, isLoading: false, data: data.message };
        });
      } catch (error) {
        setAdress((prev) => {
          return { ...prev, isLoading: false, Error: error.message };
        });
      }
    }
    fetchUrl();
  }, [url]);
  return { address };
};
