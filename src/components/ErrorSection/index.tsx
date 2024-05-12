import { Container, Grid, Typography } from "@mui/material";

const ErrorSection = ({ error }: { error: string }) => {
  return (
    <Grid item xs={12}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "red",
            borderRadius: 3,
            padding: 2,
            textTransform: "capitalize",
            textAlign: "center",
          }}
        >
          {error}
        </Typography>
      </Container>
    </Grid>
  );
};

export default ErrorSection;
