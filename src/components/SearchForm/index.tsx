import { Button, Container, Grid, TextField } from "@mui/material";
import { useState } from "react";

const SearchForm = ({ onSubmit }: any) => {
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(zipCode);
  };

  return (
    <Grid item xs={12} className="bg-gray-200 py-8">
      <Container maxWidth="md" style={{ display: "flex" }}>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", width: "100%" }}
        >
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
        </form>
      </Container>
    </Grid>
  );
};

export default SearchForm;
