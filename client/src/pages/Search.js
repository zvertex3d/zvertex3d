import { useLocation } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

const Search = () => {
  const { state } = useLocation();

  return (
    <div style={{ padding: 20 }}>
      <h2>Vendors</h2>

      {state?.length ? (
        state.map((item, i) => (
          <Card key={i} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2">{item.location}</Typography>
              <Typography variant="body2">{item.services}</Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>No vendors found</p>
      )}
    </div>
  );
};

export default Search;