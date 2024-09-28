import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import PlaylistItemProps from "./PlaylistItem.types";
import { Paper } from "@mui/material";

function PlaylistItem(props: PlaylistItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Paper
      sx={{ p: 2, my: 1, bgcolor: "#bdd7fc" }}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {props.id}
    </Paper>
  );
}
export default PlaylistItem;
