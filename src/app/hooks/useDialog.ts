import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from './usePosts';
import { deletePosts } from '../slices/post/thunks';
import { useSnackbar } from '../../hooks/useSnackbar';


export const useDialog = () => {

    const [open, setIsOpen ] = useState(false);

    const openDialog = ( open: boolean, event: React.FormEvent ) => {
      event.preventDefault();
      setIsOpen(open);
    }

    const handleClose = () => {
        setIsOpen( !open );
    };

  return {
    open,
    setIsOpen,
    handleClose,
    openDialog,
  }
}

