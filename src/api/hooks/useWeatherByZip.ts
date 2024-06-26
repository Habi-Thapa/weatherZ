import { useEffect, useState } from "react";
import { getWeatherByZip } from "../weatherApi";

export const useWeatherByZip = (zip: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await getWeatherByZip(zip);
        setData(response);
        setError(null);
      } catch (error: any) {
        // console.log("Error log", error.message);
        setError(error.message);
        setData(null);
      } finally {
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
