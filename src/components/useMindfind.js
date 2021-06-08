import { useState, useEffect } from "react";

const useMindfind = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      fetch('/api/geturls')
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, []);

  return { data };
};

export default useMindfind;