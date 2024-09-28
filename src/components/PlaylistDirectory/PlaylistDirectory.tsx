import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistIcon from "@mui/icons-material/QueueMusicRounded";
import "./PlaylistDirectory.scss";
import { useAppDispatch, useAppSelector } from "../../context/hooks";
import { addPlaylist } from "../../context/playlist.context";

function PlaylistDirectory() {
  // global state
  const { items } = useAppSelector((state) => state.playlist);
  const dispatch = useAppDispatch();

  function addNewPlaylist() {
    const id = crypto.randomUUID();
    dispatch(addPlaylist({ id, name: id }));
  }

  return (
    <>
      <Button
        startIcon={<PlaylistAddIcon />}
        variant="outlined"
        fullWidth
        onClick={addNewPlaylist}
      >
        Add Playlist
      </Button>

      <List className="playlist-list">
        {items.map((item) => (
          <ListItem key={item.id} disablePadding className="playlist-list-item">
            <ListItemButton>
              <ListItemIcon>
                <PlaylistIcon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        {items.length === 0 && (
          <ListItem className="playlist-list-item">
            <ListItemIcon>
              <PlaylistIcon />
            </ListItemIcon>
            <ListItemText primary="No Playlists" />
          </ListItem>
        )}
      </List>
    </>
  );
}

export default PlaylistDirectory;
