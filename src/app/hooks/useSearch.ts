import { usePosts } from './usePosts';
import { useUsers } from './useUsers';


export const useSearch = () => {

    const { posts } = usePosts();
    const { users } = useUsers();

    

    const getPostsByAuthor = (name = '') => {
        if(name.length === 0) return;
        const user = users.filter( user => user.name.toLowerCase().includes(name.toLowerCase()));
        if(user.length != 0) return posts.filter( post => post.userId === user[0].id);
        return [];
    }   
    
    return {
        getPostsByAuthor
    }
  
}
