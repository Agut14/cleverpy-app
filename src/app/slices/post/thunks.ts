import { AppDispatch, RootState } from '../../../store/store';
import { postApi } from '../../../api/postApi';
import { setLoadingPosts, setPosts } from './postSlice';


const getPostFromApi = async( dispatch: AppDispatch ) => {
    const response = await postApi.get('posts');
    dispatch( setPosts( { posts: response.data, isLoading: false }) )

}

export const getPosts = ( page: number = 0 ) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch( setLoadingPosts() );
        
        getPostFromApi( dispatch );
    }
    
}