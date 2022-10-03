import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { useForm } from "../../hooks/useForm";
import { post} from "../../interfaces/postInterface";
import { RootState } from "../../store/store";
import { getPosts, updatePosts, deletePosts, getPostsById } from '../slices/post/thunks';


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
