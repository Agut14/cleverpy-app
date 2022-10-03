import { useState } from "react";

export const useSnackbar = () => {

    const [openSnack, setOpen] = useState(false);
    const [msgSnack, setMsg] = useState('');

    const handleClickSnack = ( msg:string = '') => {
        if(msg.length == 0) return;
        setOpen(true);
        setMsg(msg);
      };
    
    const handleCloseSnack = (event?: React.SyntheticEvent | Event, reason?: string) => {
        setOpen(false);
        setMsg('');
    }  
    

  return {
    handleClickSnack,
    handleCloseSnack,
    openSnack,
    msgSnack,
    setOpen
  }
}
