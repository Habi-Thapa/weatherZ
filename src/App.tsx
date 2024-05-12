import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useWeatherByZip } from "./api/hooks/useWeatherByZip";
import { useState } from "react";
import dayjs from "dayjs";

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
            Weather Data
            {/* {!loading && data && <p>{JSON.stringify(data)}</p>} */}
            <Typography>
              {dayjs(data?.dt * 1000).format("MMMM D, h:mm A")}
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
