import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
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
    </>
  );
};

export default Header;
