import { Grid } from "@mui/material";
import { useWeatherByZip } from "./api/hooks/useWeatherByZip";
import { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import WeatherSection from "./components/WeatherSection";
import WeatherSkeleton from "./components/WeatherSkeleton";
import ErrorSection from "./components/ErrorSection";
const App = () => {
  const [zipCode, setZipCode] = useState("10001");
  const { loading, error, data } = useWeatherByZip(zipCode);
  const handleFormSubmit = (zipCode: string) => {
    setZipCode(zipCode);
  };

  return (
    <>
      <Header />
      <Grid container>
        {/* <Grid item xs={12}>
          Hero Section
        </Grid> */}
        <SearchForm onSubmit={handleFormSubmit} />
        {loading && !error && <WeatherSkeleton />}
        {error && (
          <>
            <ErrorSection error={error} />
            <WeatherSkeleton />
          </>
        )}
        {!loading && !error && data && <WeatherSection data={data} />}
      </Grid>
    </>
  );
};

export default App;
