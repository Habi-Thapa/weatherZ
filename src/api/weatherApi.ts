import api from ".";

export const getWeatherByZip = async (zip: string) => {
  try {
    const response = await api.get(`/weather`, {
      params: {
        zip: zip,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
