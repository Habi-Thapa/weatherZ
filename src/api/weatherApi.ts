import api from ".";

export const getWeatherByZip = async (zip: string) => {
  try {
    const response = await api.get(`/weather`, {
      params: {
        zip: zip,
      },
    });
    return response.data;
  } catch (error: any) {
    // console.error(error);
    throw new Error(
      error.response?.data.message || "Error fetching weather data"
    );
  }
};
