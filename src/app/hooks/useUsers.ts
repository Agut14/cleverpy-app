import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { RootState } from "../../store/store";
import { getUsers } from "../slices/user/thunk";


export const useUsers = () => {

    const dispatch = useAppDispatch();
    const { users, isLoadingUsers } = useSelector( (state: RootState ) => state.users);

    useEffect(() => {
        dispatch(getUsers());
      }, []);
    
  return { users, isLoadingUsers };
}
