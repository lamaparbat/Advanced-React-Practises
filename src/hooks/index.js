import { useState, useEffect } from "react";

export const useFetchData = ({ url }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setData(json);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { data, isLoading, error };
};
