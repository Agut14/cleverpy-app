import { useAppDispatch } from '../../hooks/index';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { getPosts } from '../slices/post/thunks';
import '../styles/cardStyles.scss'
import { getUsers } from '../slices/user/thunk';
import { usePosts } from '../hooks/usePosts';
import { useUsers } from '../hooks/useUsers';


export const HomePage = () => {

  const dispatch = useAppDispatch();
  const { posts, isLoading } = usePosts();
  const { users, isLoadingUsers } = useUsers();

  return (
    <>
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
              <button className='edit'>Editar</button>
              <button className='eliminate'>Eliminar</button>
          </div>
        </div>
      ))}
      
    </div>
    </>
    
  )
}
