import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { post} from "../../interfaces/postInterface";
import { RootState } from "../../store/store";
import { getPosts, updatePosts } from '../slices/post/thunks';


export const usePosts = () => {

    const dispatch = useAppDispatch();
    const { posts, isLoading } = useSelector( (state: RootState ) => state.posts);
    

    const deletePost = (event?: React.FormEvent) => {
      event?.preventDefault();
      console.log('Post borrado con éxito');
    }

    const getPostById = ( id?: string) => {
      return posts.find( post => 
        String(post.id) == id
      )
    }

    const updatePostsFromHook = (event: React.FormEvent, id?: number, data?: post) => {
      event?.preventDefault();
      dispatch( updatePosts( id ) );
    }

    useEffect(() => {
        dispatch(getPosts());
      }, [ ]);

  return { posts, isLoading, deletePost, getPostById, updatePostsFromHook };
}
