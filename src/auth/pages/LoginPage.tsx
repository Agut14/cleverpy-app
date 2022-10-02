import '../styles/loginStyles.scss';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';


export const LoginPage = () => {

  const { authLogin } = useContext(AuthContext)
  const navigate = useNavigate();
  const { username, sendData, onHandleChange } = useForm({
    username: ''
  });

  const onLoginUser = (event: React.FormEvent, username: string = '') => {
    event.preventDefault();
    if( username.trim().length > 0) {
      authLogin( username );
    navigate('/', {
      replace: true
    });
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
    </>
    
  )
}
