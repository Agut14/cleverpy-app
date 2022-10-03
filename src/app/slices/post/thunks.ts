import { AppDispatch, RootState } from '../../../store/store';
import { postApi } from '../../../api/postApi';
import { setIsError, setLoadingPosts, setNoError, setPostDeleted, setPosts, setPostsById, stopLoadingPost } from './postSlice';
import { post } from '../../../interfaces/postInterface';


const getPostFromApi = async( dispatch: AppDispatch ) => {
    await postApi.get('posts')
    .then(response => {
        dispatch( setPosts( { posts: response.data, isLoading: false, post: {} }) )
        dispatch( setPostDeleted( 0 ))
    })
    .catch(error => dispatch( setIsError(error.message)));
}

const getPostFromApiById = async( dispatch: AppDispatch, id: number ) => {
    await postApi.get(`posts/${id}`)
    .then(response => {
        dispatch( setPostsById( response.data) );
    })
    .catch(error => dispatch( setIsError(error.message)));
}

const updatePostFromApi = async( dispatch: AppDispatch, id?: number, data?: post ) => {
    await postApi.put(`posts/${id}`, data)
    .then( response =>
        dispatch( setNoError() )
    )
    .catch(error => {
        dispatch( setIsError(error.message));
    });
    dispatch( stopLoadingPost() );
}

const deletePostFromApi = async( dispatch: AppDispatch, id?: number) => {
    await postApi.delete(`posts/${id}`)
    .then( response => {
        dispatch( setPostDeleted( id ))
        dispatch( setNoError() )
    })
    .catch(error => {
        dispatch( setIsError(error.message) );
    })
    dispatch( stopLoadingPost() );
}

export const getPosts = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch( setLoadingPosts() );
        getPostFromApi( dispatch );
    }
}

export const getPostsById = (id: number) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch( setLoadingPosts() );
        getPostFromApiById( dispatch, id );
    }
}

export const updatePosts = ( id?: number, data?: post ) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(setLoadingPosts());
        updatePostFromApi( dispatch, id, data );
    }
    
}

export const deletePosts = ( id?: number ) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(setLoadingPosts());
        deletePostFromApi( dispatch, id);
    }
}