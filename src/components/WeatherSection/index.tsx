import { Container, Divider, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import NavigationIcon from "@mui/icons-material/Navigation";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";

interface WeatherData {
  dt: number;
  name: string;
  sys: {
    country: string;
  };
  main: {
    feels_like: number;
    temp: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
  visibility: number;
}

interface WeatherSectionProps {
  data: WeatherData;
}

const WeatherSection = ({ data }: WeatherSectionProps) => {
  // Convert Kelvin to Celsius
  const temperatureCelsius = data?.main.temp - 273.15;
  const feelsLikeCelsius = data?.main.feels_like - 273.15;

  return (
    <>
      <Grid item xs={12}>
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Typography sx={{ fontWeight: "bold", color: "#eb6e4b" }}>
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
            {`Feels like ${feelsLikeCelsius.toFixed(1)}°C. `}
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
            {temperatureCelsius.toFixed(1)} °C
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
        <Grid item xs={12} md={6} sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
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
            <ExploreOutlinedIcon sx={{ fontSize: "1rem" }} />
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
    </>
  );
};

export default WeatherSection;
