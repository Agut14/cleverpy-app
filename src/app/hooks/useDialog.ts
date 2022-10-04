import { useState } from 'react';

// hook para manejar los eventos y el estado del dialog

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

