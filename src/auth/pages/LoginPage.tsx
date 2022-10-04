import '../styles/loginStyles.scss';
import { FaUserAlt } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { useSnackbar } from '../../hooks/useSnackbar';
import { Alert, Snackbar } from '@mui/material';
import { usePosts } from '../../app/hooks/usePosts';


export const LoginPage = () => {

  const { authLogin } = useContext(AuthContext)
  const { username, onHandleChange } = useForm({
    username: ''
  });
  const { 
    handleClickErrorSnack,
    errorMsg, 
    handleCloseErrorSnack, 
    openErrorSnack } = useSnackbar();  

  const onLoginUser = (event: React.FormEvent, username: string = '') => {
    event.preventDefault();
    if( username.trim().length > 0) {
      authLogin( username );
    }else {
      handleClickErrorSnack( 'El nombre de usuario debe contener por lo menos 1 carácter!' );
    }
  }

  return (
    <>
    <div className='login-container'>
      <div className='login-subcontainer'>
      <form className='login-form' onSubmit={ (event) => onLoginUser(event, username) }>
        <div className="flex-row">
          <label className="lf--label" htmlFor="username">
            <FaUserAlt />
          </label>
          <input 
            id="username" 
            className='lf--input' 
            placeholder='Usuario'
            name="username" 
            type='text'
            value={ username }
            onChange={(event) => onHandleChange(event.target)}/>
        </div>
        <input 
          className='lf--submit' 
          type='submit' 
          value='LOGIN'/>
      </form>
      </div>
    </div>
    <Snackbar open= {openErrorSnack} autoHideDuration={4000} onClose={(event) =>handleCloseErrorSnack(event)}>
          <Alert onClose={handleCloseErrorSnack} severity='error' sx={{ width: '100%' }}>
            { errorMsg }
          </Alert>
    </Snackbar>
    </>
    
  )
}
