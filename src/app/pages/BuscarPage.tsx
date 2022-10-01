import { useForm } from '../../hooks/useForm';
import '../styles/buscarPage.scss'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useSearch } from '../hooks/useSearch';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";


export const BuscarPage = () => {

  const { searchText, onHandleChange, resetData } = useForm({
    searchText: ''
  });
  const { getPostsByAuthor } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  const query = queryString.parse( location.search );
  const searchValue = query.q ?? '';
  const posts = getPostsByAuthor( String(searchValue));

  const showSearch = (searchValue.length === 0);
  const showError = (searchValue.length !== 0) && posts?.length === 0;
  
  

  const onSubmitSearch = ( event: React.FormEvent ) => {
    event.preventDefault();
    if(searchText?.trim() == '') return;
    navigate(`?q=${searchText?.toLowerCase().trim()}`);
    resetData();
  };

  return (
    <div className="buscar-page-content">
      <div className='form-search-posts'>
        <div>
          <h2>Buscar posts por usuario</h2>
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

      <div>
      <h2>Resultados</h2>
      
      { showSearch &&
      <div>
        <h4>Prueba a buscar por el nombre del usuario, por ejemplo Graham...</h4>
      </div> 
      }
      
      { showError &&
      <div>
        <h4>No hay resultados para <b>{ searchValue }</b></h4>
      </div> 
      }

      <div className='post-search'>
          <div>{ posts?.map(post => (
            <div key={post.id} className='post-search-item'><RiDoubleQuotesL /> { post.body } <RiDoubleQuotesR /></div>
          )) }</div>
        </div>
      </div>
    </div>




  )
}
