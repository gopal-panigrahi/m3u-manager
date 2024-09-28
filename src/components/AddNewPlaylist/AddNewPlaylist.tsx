import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../context/hooks";
import { openNewPlaylistModal } from "../../context/modal.context";
import { addPlaylist } from "../../context/playlist.context";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
};

function AddNewPlaylist() {
  const open = useAppSelector((state) => state.modal.new_playlist);
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset } = useForm<Inputs>();

  function handleClose() {
    dispatch(openNewPlaylistModal(false));
  }

  function addNewPlaylist(data: Inputs) {
    dispatch(addPlaylist({ id: crypto.randomUUID(), name: data.name }));
    reset();
    handleClose();
  }

  return (
    <Dialog open={open} maxWidth="sm" fullWidth onClose={handleClose}>
      <form onSubmit={handleSubmit(addNewPlaylist)}>
        <DialogTitle>Add New Playlist</DialogTitle>
        <DialogContent dividers>
          <TextField
            {...register("name")}
            fullWidth
            label="Playlist Name"
            autoComplete="off"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AddNewPlaylist;
