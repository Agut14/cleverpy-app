import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { AlertDialogProps } from '../../interfaces/alertDialog';

export const AlertDialog = ( {open, handleClose, handleCloseDelete}: AlertDialogProps) => {

  return (
    <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Borrar post?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Deseas eliminar el post? Esta acción no tendrá vuelta atrás.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Volver</Button>
            <Button style={{color: 'red'}} onClick={handleCloseDelete} autoFocus>
              Borrar
            </Button>
          </DialogActions>
        </Dialog>
  )
}
