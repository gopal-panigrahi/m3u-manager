import { Container, Grid2, Paper } from "@mui/material";
import PlaylistDirectory from "./components/PlaylistDirectory";
import "./App.scss";
import AddNewPlaylist from "./components/AddNewPlaylist";
import Playlist from "./components/Playlist";

function App() {
  return (
    <>
      <Container disableGutters maxWidth="xl" sx={{ height: "100vh" }}>
        <Grid2 container height="100%">
          <Grid2
            component={Paper}
            elevation={4}
            size={{ xs: 5, md: 4, lg: 3 }}
            sx={{ borderRight: "red", p: 2 }}
          >
            <PlaylistDirectory />
          </Grid2>
          <Grid2 size={{ xs: 7, md: 8, lg: 9 }}>
            <Playlist />
          </Grid2>
        </Grid2>
      </Container>
      <AddNewPlaylist />
    </>
  );
}

export default App;
