import { useLocation } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

const Search = () => {
  const { state } = useLocation();

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Results</h2>

      {state?.length ? (
        state.map((item, i) => (
          <Card key={i} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{item.name || "Vendor"}</Typography>
              <Typography variant="body2">
                {item.location || "Location not available"}
              </Typography>
              <Typography variant="body2">
                {item.services || "Services not listed"}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>No results</p>
      )}
    </div>
  );
};

export default Search;