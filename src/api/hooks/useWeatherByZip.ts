import { useEffect, useState } from "react";
import { getWeatherByZip } from "../weatherApi";

export const useWeatherByZip = (zip: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await getWeatherByZip(zip);
        setData(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchWeather();
  }, [zip]);

  return {
    loading,
    error,
    data,
  };
};
