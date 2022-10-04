import { useForm } from '../../hooks/useForm';
import '../styles/buscarPage.scss'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useSearch } from '../hooks/useSearch';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";


export const SearchPage = () => {

  const { searchText, onHandleChange, resetData } = useForm({
    searchText: ''
  });
  const { getPostsByAuthor } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

//se obtiene el valor de búsquede de la url
  const query = queryString.parse( location.search );
  const searchValue = query.q ?? '';
//se obtienen los posts
  const posts = getPostsByAuthor( String(searchValue));

  const showSearch = (searchValue.length === 0);
  const showError = (searchValue.length !== 0) && posts?.length === 0;
  
  
//cuando se realiza la búsqueda, se llama a la url actual con el
//param q=searchValue
  const onSubmitSearch = ( event: React.FormEvent ) => {
    event.preventDefault();
    if(searchText?.trim() === '') return;
    navigate(`?q=${searchText?.toLowerCase().trim()}`);
    resetData();
  };

  return (
    <div className="buscar-page-content">
      <div className='form-search-posts'>
        <div>
          <h2 className='h2-search'>Buscar posts por usuario</h2>
          <form onSubmit={(event) => onSubmitSearch(event) }>
            <input
              className='input-global' 
              type="text"
              placeholder="Escribe algo..."
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ (event) => onHandleChange(event.target)}
              />
            <button className="btn-buscar">
              Buscar
            </button>  
          </form>
        </div>
      </div>

      <div className='search-results'>
      <h2 className='h2-search'>Resultados</h2>
      
      { showSearch &&
      <div>
        <h4 className='h4-search'>Prueba a buscar por el nombre del usuario, por ejemplo Graham...</h4>
      </div> 
      }
      
      { showError &&
      <div>
        <h4 className='h4-search'>No hay resultados para <b>{ searchValue }</b></h4>
      </div> 
      }

      <div className='post-search'>
          <div>{ posts?.map(post => (
            <div aria-label='search-container' key={post.id} className='post-search-item'>
              <RiDoubleQuotesL /> { post.body } <RiDoubleQuotesR />
              <NavLink to={`/edit/${post.id}`}>
                <button className='edit-search-page'><FiEdit3 /></button>
              </NavLink>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
