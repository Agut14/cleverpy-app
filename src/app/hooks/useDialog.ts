import { useState } from 'react';
import { usePosts } from './usePosts';


export const useDialog = () => {

    const [open, setIsOpen ] = useState(false);

    const openDialog = ( open: boolean, event: React.FormEvent ) => {
      event.preventDefault();
      setIsOpen(open);
    }

    const handleClose = () => {
        setIsOpen( !open );
    };

    const handleCloseDelete = (fn: () => void) => {
        setIsOpen( !open );
        fn();
    };


  return {
    open,
    setIsOpen,
    handleClose,
    handleCloseDelete,
    openDialog
  }
}

