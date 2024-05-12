import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useWeatherByZip } from "./api/hooks/useWeatherByZip";
import { useState } from "react";
import dayjs from "dayjs";
import NavigationIcon from "@mui/icons-material/Navigation";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
const App = () => {
  const [zipCode, setZipCode] = useState("");
  const { loading, error, data } = useWeatherByZip(zipCode);
  return (
    // <>
    //   {loading && <p>Loading...</p>}
    //   {error && <p>{error}</p>}
    //   {!loading && data && <p>{JSON.stringify(data)}</p>}
    // </>
    <>
      <CssBaseline />
      <AppBar component="nav" position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div">
            WeatherZ
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Grid container>
        {/* <Grid item xs={12}>
          Hero Section
        </Grid> */}
        <Grid item xs={12} className="bg-gray-200 py-8">
          <Container maxWidth="md" style={{ display: "flex" }}>
            <TextField
              fullWidth
              sx={{ borderRadius: 0, backgroundColor: "white" }}
              label="Enter Zip Code"
              id="zipCode"
              variant="outlined"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                fontWeight: "bold",
                borderRadius: "0 4px 4px 0",
                ml: -1,
                px: 3,
                width: "auto",
                whiteSpace: "nowrap",
                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
              }}
            >
              Get Info
            </Button>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md" sx={{ py: 4 }}>
            {/* {!loading && data && <p>{JSON.stringify(data)}</p>} */}
            <Typography sx={{ fontWeight: "bold ", color: "#eb6e4b" }}>
              {dayjs(data?.dt * 1000).format("MMMM D, h:mm A")}
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold" }}
            >{`${data?.name}, ${data?.sys.country}`}</Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {`Feels like ${data?.main.feels_like}. `}
              {data?.weather[0].description}
            </Typography>
          </Container>
        </Grid>
        <Container maxWidth="md" sx={{ display: "flex" }}>
          <Grid item xs={12} md={6} display="flex" alignItems="center">
            <img
              src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}
              alt="Weather Icon"
              className="w-24 h-24"
            />
            <Typography variant="h2" fontWeight="semibold">
              {data?.main.temp} °C
            </Typography>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: "#eb6e4b",
              borderWidth: "1.1px",
              mx: 6,
            }}
          />
          <Grid
            item
            xs={12}
            md={6}
            sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "inherit",
                lineHeight: "inherit",
              }}
            >
              <NavigationIcon sx={{ fontSize: "1rem" }} /> {data?.wind.speed}
              mph, {data?.wind.deg}°
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "inherit",
                lineHeight: "inherit",
              }}
            >
              <ExploreOutlinedIcon sx={{ fontSize: "1rem" }} />{" "}
              {data?.main.pressure}hPa
            </Typography>
            <Typography sx={{ fontSize: "inherit", lineHeight: "inherit" }}>
              Humidity: {data?.main.humidity}%
            </Typography>
            <Typography sx={{ fontSize: "inherit", lineHeight: "inherit" }}>
              Visibility: {data?.visibility / 1000}km
            </Typography>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default App;
