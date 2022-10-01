import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const useDialog = () => {

    const [open, setIsOpen ] = useState(false);
    const navigate = useNavigate();

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
        navigate('/', {
          replace: true,
        })
    };


  return {
    open,
    setIsOpen,
    handleClose,
    handleCloseDelete,
    openDialog
  }
}

