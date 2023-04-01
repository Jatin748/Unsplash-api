import { useEffect, useState } from "react";
import axios from "axios";
const Useaxios = (params) => {
  const [response, setResponse] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.unsplash.com/";

  const fetchData = async (url) => {
    try {
      setIsloading(true);
      const res = await axios(url);
      setResponse(res.data.results);
    } catch (err) {
      setError(err);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData(params);
  }, [params]);

  return {
    response,
    isloading,
    error,
    fetchData: (url) => fetchData(url),
  };
};

export default Useaxios;
