import { useParams } from "react-router-dom"
import { usePosts } from '../hooks/usePosts';
import '../styles/editPageStyles.scss'
import { useForm } from '../../hooks/useForm';
import { post } from "../../interfaces/postInterface";





export const EditPage = () => {

    const { id } = useParams();

   const { posts, getPostById, deletePost, updatePostsFromHook } = usePosts();
  //  const post = getPostById(id); es una forma de hacerlo
  //aquí va otr
  
  const post = posts.find(post => String(post.id) === id);
  
   const { body, title, onHandleChange } = useForm({
    body: post?.body,
    title: post?.title
   });


   const formData: post = {
    userId: post?.userId,
    id: post?.id,
    title: title,
    body: body
   }

   const isDisabled = false;
    
    
    return (
      <div className="edit-page-content">
          <div className="edit-form">
            <h3>"{ post?.title }"</h3>
            

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
                  { isDisabled ? <button>Editar</button> : <button onClick={ (event) => updatePostsFromHook(event, post?.id, JSON.stringify(formData)) }>Guardar</button>}
                  <button onClick={ (event)=> deletePost(event)}>Borrar</button>
              </div>

              
            </form>
          </div>
      </div>
)
 
}
