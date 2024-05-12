import { Button, Container, Grid, TextField } from "@mui/material";

const SearchForm = ({ zipCode, setZipCode }: any) => {
  return (
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
  );
};

export default SearchForm;
