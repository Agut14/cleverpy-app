import { useState } from "react";

//hook para controlar el uso de los snackbar de la aplicación
export const useSnackbar = () => {

    const [openSnack, setOpen] = useState(false);
    const [openErrorSnack, setOpenError] = useState(false);
    const [msgSnack, setMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleClickSnack = ( msg:string = '') => {
        if(msg.length === 0) return;
        setOpen(true);
        setMsg(msg);
      };
    
    const handleClickErrorSnack = ( msg:string = '') => {
      if(msg.length === 0) return;
      setOpenError(true);
      setErrorMsg(msg);
    };  
    
    const handleCloseSnack = (event?: React.SyntheticEvent | Event, reason?: string) => {
        setOpen(false);
        setMsg('');
    }
    
    const handleCloseErrorSnack = (event?: React.SyntheticEvent | Event, reason?: string) => {
      setOpenError(false);
      setErrorMsg('');
    }
    

  return {
    handleClickSnack,
    handleClickErrorSnack,
    handleCloseSnack,
    handleCloseErrorSnack,
    openErrorSnack,
    errorMsg,
    openSnack,
    msgSnack,
    setOpen
  }
}
