import { AppDispatch, RootState } from '../../../store/store';
import { postApi } from '../../../api/postApi';
import { setLoadingUsers, setUsers } from './userSlice';


const getUsersFromApi = async( dispatch: AppDispatch ) => {
    const response = await postApi.get('users');
    dispatch( setUsers( { users: response.data, isLoadingUsers: false }) )

}

export const getUsers = ( page: number = 0 ) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch( setLoadingUsers() );
        
        getUsersFromApi( dispatch );
    }
    
}