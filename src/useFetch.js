import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoad(false);
      })
      .catch((err) => {
        setError(err);
        setLoad(false);
      });
  }, [url]);

  return { data, load, error };
}

export default useFetch;