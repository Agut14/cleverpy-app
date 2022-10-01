import { useState } from "react";
import { usePosts } from "./usePosts";

export const useAlertDialog = () => {

const [open, setOpen] = useState(false);
const { deletePost } = usePosts();

const handleClickOpen = () => {
    setOpen(true);
  };

const handleClose = () => {
    setOpen(false);
  };

const handleCloseDelete = () => {
    setOpen(false);
    deletePost();
  };
  return { open, handleClickOpen, handleCloseDelete, handleClose };
}
