import '../styles/cardStyles.scss'
import { usePosts } from '../hooks/usePosts';
import { useUsers } from '../hooks/useUsers';
import { NavLink } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';
import { useSnackbar } from '../../hooks/useSnackbar';


export const HomePage = () => {

  const { posts, isLoading } = usePosts();
  const { users, isLoadingUsers } = useUsers(); 
  

  
  return (
    
    <div className='home-content'>
      {posts.map( post => (
        <div key={post.id} className='card'>
          <div className='card-title'>
            <h3>{ post.title }</h3>
            {users.map((user) => {
              if(user.id === post.userId) {
                return <h4 key={user.id}>{ user.name }</h4>
              }
            })}
          </div>
          <div className='card-body'>
             <p>{ post.body }</p>
             <NavLink to={`/edit/${post.id}`}><button className='edit'>Editar</button></NavLink>
          </div>  
        </div>
        
      ))} 
    </div>

    
    
  )
}
