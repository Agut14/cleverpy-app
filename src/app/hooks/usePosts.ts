import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { RootState } from "../../store/store";
import { getPosts } from "../slices/post/thunks";


export const usePosts = () => {

    const dispatch = useAppDispatch();
    const { posts, isLoading } = useSelector( (state: RootState ) => state.posts);

    useEffect(() => {
        dispatch(getPosts());
      }, []);

  return { posts, isLoading };
}
