import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { useForm } from "../../hooks/useForm";
import { post} from "../../interfaces/postInterface";
import { RootState } from "../../store/store";
import { getPosts, updatePosts, deletePosts } from '../slices/post/thunks';


export const usePosts = () => {

    const dispatch = useAppDispatch();
    const { posts, isLoading, isError, errorMsg } = useSelector( (state: RootState ) => state.posts);
    const { toggleForm } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(getPosts());
    }, [ ]);
    

    const deletePostsFromHook = (id?: number, openSnack?: ( msg: string ) => void) => {
      dispatch( deletePosts( id ) ).then(() =>{
        if(!isError){
          if(openSnack) openSnack( 'Post borrado correctamente!' );
        setTimeout( () =>
          navigate('/', {
            replace: true,
          }), 2000)
        }else {
          if(openSnack) openSnack( errorMsg ?? 'Ha habido un error' );
        }
      });
    }

    const getPostById = ( id?: string) => {
      return posts.find( post => 
        String(post.id) == id
      )
    }

    const updatePostsFromHook = (event: React.FormEvent, id?: number, data?: post, openSnack?: ( msg: string ) => void) => {
      event?.preventDefault();
      toggleForm( event );
      dispatch( updatePosts( id, data ) )
        if(!isError){
          if(openSnack) openSnack( 'Post editado correctamente!' );
        }else {
          if(openSnack) openSnack( errorMsg ?? 'Ha habido un error' );
        }
    }

  return { posts, isError, errorMsg, isLoading, deletePostsFromHook, getPostById, updatePostsFromHook };
}
