import { Backdrop, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <Backdrop
      sx={(theme) => ({ color: "white", zIndex: theme.zIndex.drawer + 1 })}
      open
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
}

export default Loading;
