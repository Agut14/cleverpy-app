import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { useForm } from "../../hooks/useForm";
import { post} from "../../interfaces/postInterface";
import { RootState } from "../../store/store";
import { getPosts, updatePosts } from '../slices/post/thunks';


export const usePosts = () => {

    const dispatch = useAppDispatch();
    const { posts, isLoading } = useSelector( (state: RootState ) => state.posts);
    const  { toggleForm } = useForm();

    useEffect(() => {
      dispatch(getPosts());
    }, [ ]);
    

    const deletePost = ( openSnack?: ( msg: string) => void ) => {
      if(openSnack) openSnack( 'Post borrado correctamente!' )
      console.log('Post borrado con éxito');
    }

    const getPostById = ( id?: string) => {
      return posts.find( post => 
        String(post.id) == id
      )
    }

    const updatePostsFromHook = (event: React.FormEvent, id?: number, data?: string, openSnack?: ( msg: string ) => void) => {
      event?.preventDefault();
      toggleForm( event );
      dispatch( updatePosts( id ) ).then( res =>{
        if(openSnack) openSnack( 'Post editado correctamente!' );
      });
    }

    

  return { posts, isLoading, deletePost, getPostById, updatePostsFromHook };
}
