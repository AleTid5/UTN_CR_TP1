import { useState, useEffect } from "react";
const axios = require("axios");

const useGet = ({ url, params = {}, initialState = [] }) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await axios.get(url, params);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    get();
  }, [url]);

  return [data, isLoading, error];
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { useGet };
