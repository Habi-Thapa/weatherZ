import { Container, Grid, Skeleton, Divider } from "@mui/material";

const WeatherSkeleton = () => {
  return (
    <>
      <Grid item xs={12}>
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Skeleton
            variant="text"
            width={210}
            height={30}
            sx={{ bgcolor: "#eb6e4b" }}
          />
          <Skeleton variant="text" width={300} height={52} />
          <Skeleton variant="text" width={250} height={28} />
        </Container>
      </Grid>
      <Container maxWidth="md" sx={{ display: "flex" }}>
        <Grid item xs={12} md={6} display="flex" alignItems="center">
          <Skeleton variant="rectangular" width={96} height={96} />
          <Skeleton variant="text" width={140} height={64} />
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
          <Skeleton variant="text" width={200} height={28} />
          <Skeleton variant="text" width={200} height={28} />
          <Skeleton variant="text" width={180} height={28} />
          <Skeleton variant="text" width={180} height={28} />
        </Grid>
      </Container>
    </>
  );
};

export default WeatherSkeleton;
