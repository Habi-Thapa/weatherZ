import { useWeatherByZip } from "./api/hooks/useWeatherByZip";

const App = () => {
  const { loading, error, data } = useWeatherByZip("1");

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && data && <p>{JSON.stringify(data)}</p>}
    </>
  );
};

export default App;
