import { Grid } from "@mui/material";
import { useWeatherByZip } from "./api/hooks/useWeatherByZip";
import { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import WeatherSection from "./components/WeatherSection";
import WeatherSkeleton from "./components/WeatherSkeleton";
const App = () => {
  const [zipCode, setZipCode] = useState("");
  const { loading, error, data } = useWeatherByZip(zipCode);

  return (
    <>
      <Header />
      <Grid container>
        {/* <Grid item xs={12}>
          Hero Section
        </Grid> */}
        <SearchForm zipCode={zipCode} setZipCode={setZipCode} />
        {loading && <WeatherSkeleton />}
        {error && <p>Error: {error.message}</p>}
        {!loading && data && <WeatherSection data={data} />}
      </Grid>
    </>
  );
};

export default App;
