import { useAppDispatch } from '../../hooks/index';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { getPosts } from '../slices/post/thunks';
import '../styles/cardStyles.scss'


export const HomePage = () => {

  const dispatch = useAppDispatch();
  const { posts, isLoading } = useSelector( (state: RootState ) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);


  return (
    <>
    <div className='home-content'>
      {posts.map( post => (
        <div className='card'>
          <div className='card-title'>
            <h3>{ post.title }</h3>
          </div>
          <div className='card-body'>
             <p>{ post.body }</p>
          </div>
        </div>
      ))}
      
    </div>
    </>
    
  )
}
