import { Navigate, useParams } from "react-router-dom"
import { usePosts } from '../hooks/usePosts';
import '../styles/editPageStyles.scss'
import { useForm } from '../../hooks/useForm';
import { post } from "../../interfaces/postInterface";
import { useMemo, useState } from 'react';
import { AlertDialog } from '../components/AlertDialog';
import { useDialog } from '../hooks/useDialog';



export const EditPage = () => {

  const { id } = useParams();
  const { getPostById, deletePost, updatePostsFromHook, isLoading } = usePosts();
  const { open, openDialog, handleClose, handleCloseDelete } = useDialog();
  const post = useMemo(() => getPostById( id ), [ id ]);
  const { isDisabled, toggleForm, body, title, onHandleChange } = useForm({
    body: post?.body,
    title: post?.title
   });

   const updatePostForm = (event: React.FormEvent, id: number | undefined, data: string | undefined) => {
    updatePostsFromHook(event, id, data);
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
            <h3>Editar post { id }</h3>
            
            <form action="#">
              <fieldset className="edit-form-fields" disabled={isDisabled}>
                <legend>Editar post con id { post?.id }</legend>
                <label className="edit-page-label" htmlFor="body">Title</label>
                <textarea 
                  name="title"
                  value={ title } 
                  onChange={(event) => onHandleChange(event.target) }/>
                <label className="edit-page-label" htmlFor="body">Body</label>
                <textarea 
                  name="body"
                  value={ body }
                  onChange={(event) => onHandleChange(event.target) } />
              </fieldset>
              <div className="edit-page-buttons">
                  { isDisabled ? <button onClick={ (event) => toggleForm(event) }>Editar</button> 
                  : <button onClick={ (event) => updatePostForm(event, post?.id, JSON.stringify(formData)) }>Guardar</button>}
                  <button onClick={ (event) => openDialog(true, event) }>Borrar</button>
              </div>
            </form>
          </div>
          <AlertDialog open={open} handleClose={handleClose} handleCloseDelete={() => handleCloseDelete(deletePost)} />
      </div>
)
   }else {
    return (
      <div className="edit-page-content">
      <div>Loading...</div>
    </div>
    )
   }
    
    
 
}
