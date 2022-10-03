import { AppDispatch, RootState } from '../../../store/store';
import { postApi } from '../../../api/postApi';
import { setLoadingPosts, setPosts, stopLoadingPost } from './postSlice';


const getPostFromApi = async( dispatch: AppDispatch ) => {
    const response = await postApi.get('posts');
    dispatch( setPosts( { posts: response.data, isLoading: false }) )

}

const updatePostFromApi = async( dispatch: AppDispatch, id?: number, data?: string ) => {
    const responseUpdate = await postApi.put(`posts/${id}`, data);
    if(responseUpdate.data.id == String(id)){
        getPostFromApi( dispatch );
    }
    dispatch( stopLoadingPost() );
}



export const getPosts = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch( setLoadingPosts() );
        getPostFromApi( dispatch );
    }
}



export const updatePosts = ( id?: number, data?: string ) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch( setLoadingPosts() );
        updatePostFromApi( dispatch, id, data );
    }
    
}