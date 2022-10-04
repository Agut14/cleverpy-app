import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { useForm } from "../../hooks/useForm";
import { post} from "../../interfaces/postInterface";
import { RootState } from "../../store/store";
import { updatePosts, deletePosts } from '../slices/post/thunks';

//hook para manejar las acciones que se van a llamar en el slice,
//y actualizar el estado de la aplicación.

export const usePosts = () => {

    const dispatch = useAppDispatch();
    const { posts, isLoading, isError, errorMsg, postDeleted, post } = useSelector( (state: RootState ) => state.posts);
    const { toggleForm } = useForm({});

    const deletePostsFromHook = (id?: number, openSnack?: ( msg: string ) => void) => {
      dispatch( deletePosts( id ) ).then(() =>{
      if(openSnack) openSnack( 'Post borrado correctamente!' );
      });
    }

    const updatePostsFromHook = (event: React.FormEvent, id?: number, data?: post, openSnack?: ( msg: string ) => void) => {
      event?.preventDefault();
      toggleForm( event );
      dispatch( updatePosts( id, data ) )
      if(openSnack) openSnack( 'Post editado correctamente!' );
    }

  return { 
    posts,
    post, 
    isError, 
    postDeleted, 
    errorMsg, 
    isLoading, 
    deletePostsFromHook, 
    updatePostsFromHook };
}
