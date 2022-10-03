import { AppDispatch, RootState } from '../../../store/store';
import { postApi } from '../../../api/postApi';
import { setIsError, setLoadingPosts, setPosts, stopLoadingPost } from './postSlice';
import { post } from '../../../interfaces/postInterface';


const getPostFromApi = async( dispatch: AppDispatch ) => {
    await postApi.get('posts')
    .then(response => {
        dispatch( setPosts( { posts: response.data, isLoading: false }) )
    })
    .catch(error => dispatch( setIsError(error.message)));
}

const updatePostFromApi = async( dispatch: AppDispatch, id?: number, data?: post ) => {
    await postApi.put(`posts/${id}`, data)
    .catch(error => {
        dispatch( setIsError(error.message));
    });
    dispatch( stopLoadingPost() );
}

const deletePostFromApi = async( dispatch: AppDispatch, id?: number) => {
    await postApi.delete(`posts/${id}`)
    .then( response => {
        if(response.data.id == String(id)){
        }
    })
    .catch(error => {
        setIsError(error.message);
    })
    dispatch( stopLoadingPost() );
}

export const getPosts = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch( setLoadingPosts() );
        getPostFromApi( dispatch );
    }
}

export const updatePosts = ( id?: number, data?: post ) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(setLoadingPosts());
        updatePostFromApi( dispatch, id, data )
        .catch( error => dispatch( setIsError( error.message )));
    }
    
}

export const deletePosts = ( id?: number ) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(setLoadingPosts());
        deletePostFromApi( dispatch, id);
    }
}