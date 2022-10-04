import { Navigate, useParams } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import '../styles/editPageStyles.scss'
import { useForm } from '../../hooks/useForm';
import { post } from "../../interfaces/postInterface";
import { useEffect } from 'react';
import { AlertDialog } from '../components/AlertDialog';
import { useDialog } from '../hooks/useDialog';
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { useSnackbar } from '../../hooks/useSnackbar';
import { useAppDispatch } from '../../hooks';
import { getPostsById } from '../slices/post/thunks';


export const EditPage = () => {

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { updatePostsFromHook, deletePostsFromHook, isLoading, isError, errorMsg, postDeleted, post } = usePosts();
  const { isDisabled, toggleForm, body, title, onHandleChange, setFormData, resetData } = useForm({
    body: post.body,
    title: post.title
   });

  useEffect(() => {
    dispatch ( getPostsById( Number(id) ) );
  }, [ ]);

  useEffect(() => {
    setFormData();
   }, [ post ]);

  const { open, openDialog, handleClose } = useDialog();

  const { openSnack, msgSnack, handleClickSnack, handleCloseSnack } = useSnackbar();
  
//función para actualizar el post que a su vez llama al método del usePosts
  const updatePostForm = (event: React.FormEvent, id: number | undefined, data: post | undefined) => {
    updatePostsFromHook(event, id, data, handleClickSnack);
    toggleForm(event);
    if(isError){
      resetData();
    }
  }

//función para eliminar el post que a su vez llama al método del usePosts
  const deletePostForm = (id?: number) => {
    handleClose();
    deletePostsFromHook( id, handleClickSnack);
  }

  const formData: post = {
    userId: post?.userId,
    id: post.id,
    title: title,
    body: body
   }
  const snackType = !isError ? 'success' : 'error';

//si no existe el post vuelve al inicio
  if(!post) {
    return <Navigate to={'/'} />
  }

  //mock para saber si el post ha sido borrado, devuelve a la página de inicio
  if( postDeleted === post?.id ){
    return <Navigate to={'/'} />
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
                  : <button className="yes-button" onClick={ (event) => updatePostForm(event, post?.id, formData) }>Guardar</button>}
                  <button className="no-button" onClick={ (event) => openDialog(true, event) }>Borrar</button>
              </div>
            </form>
          </div>
          <AlertDialog open={open} handleClose={handleClose} handleCloseDelete={() => deletePostForm(post?.id)} />
          <Snackbar open= {openSnack} autoHideDuration={4000} onClose={(event) =>handleCloseSnack(event)}>
            <Alert onClose={handleCloseSnack} severity={snackType} sx={{ width: '100%' }}>
              { isError && errorMsg }
              { !isError && msgSnack}
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
