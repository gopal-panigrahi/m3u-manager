import { Button, Container, Grid2, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PlaylistDirectory from "./components/PlaylistDirectory";
import "./App.scss";

function App() {
  return (
    <Container disableGutters maxWidth="xl" sx={{ height: "100vh" }}>
      <Grid2 container height="100%">
        <Grid2
          component={Paper}
          elevation={8}
          size={3}
          sx={{ borderRight: "red", p: 2 }}
        >
          <Button startIcon={<AddIcon />} variant="outlined" fullWidth>
            Add Playlist
          </Button>
          <PlaylistDirectory />
        </Grid2>
        <Grid2 size={9} sx={{ bgcolor: "" }}></Grid2>
      </Grid2>
    </Container>
  );
}

export default App;
