import { Navigate, useParams } from "react-router-dom"
import { usePosts } from '../hooks/usePosts';
import '../styles/editPageStyles.scss'
import { useForm } from '../../hooks/useForm';
import { post } from "../../interfaces/postInterface";
import { useMemo, useState } from 'react';
import { AlertDialog } from '../components/AlertDialog';
import { useDialog } from '../hooks/useDialog';
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { useSnackbar } from '../../hooks/useSnackbar';



export const EditPage = () => {

  const { id } = useParams();

  const { getPostById, deletePost, updatePostsFromHook, isLoading } = usePosts();

  const { open, openDialog, handleClose, handleCloseDelete } = useDialog();

  const post = useMemo(() => getPostById( id ), [ id ]);
  
  const { isDisabled, toggleForm, body, title, onHandleChange } = useForm({
    body: post?.body,
    title: post?.title
   });

  const { openSnack, msgSnack, handleClickSnack, handleCloseSnack } = useSnackbar(); 

   const updatePostForm = (event: React.FormEvent, id: number | undefined, data: string | undefined) => {
    updatePostsFromHook(event, id, data, handleClickSnack);
    toggleForm(event)
   }

  if( !post ){
    return <Navigate to={'/'} />
  }

   const formData: post = {
    userId: post?.userId,
    id: post?.id,
    title: title,
    body: body
   }
    
   if(!isLoading){
    return (
      <div className="edit-page-content">
          <div className="edit-form">
            <h3 className="h3-edit">Editar post { id }</h3>
            
            <form action="#">
              <fieldset className="edit-form-fields" disabled={isDisabled}>
                <div className="color-field"></div>
                <div className="grid-separator">
                  <label className="edit-page-label" htmlFor="body">Título</label>
                  <textarea
                    className="title-field" 
                    name="title"
                    value={ title } 
                    onChange={(event) => onHandleChange(event.target) }/>
                </div>
                <div className="grid-separator">
                  <label className="edit-page-label" htmlFor="body">Texto</label>
                  <textarea 
                    name="body"
                    value={ body }
                    onChange={(event) => onHandleChange(event.target) } />
                </div>
              </fieldset>
              <div className="flex-separator">
                  { isDisabled ? <button className="yes-button" onClick={ (event) => toggleForm(event) }>Editar</button> 
                  : <button className="yes-button" onClick={ (event) => updatePostForm(event, post?.id, JSON.stringify(formData)) }>Guardar</button>}
                  <button className="no-button" onClick={ (event) => openDialog(true, event) }>Borrar</button>
              </div>
            </form>
          </div>
          <AlertDialog open={open} handleClose={handleClose} handleCloseDelete={() => handleCloseDelete(() => deletePost(handleClickSnack))} />
          <Snackbar open= {openSnack} autoHideDuration={4000} onClose={(event) =>handleCloseSnack(event)}>
            <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
              { msgSnack }
            </Alert>
          </Snackbar>
      </div>
)
   }else {
    return (
      <div className="edit-page-content">
      <CircularProgress />
    </div>
    )
   }
    
    
 
}
