import { useForm } from '../../hooks/useForm';
import '../styles/buscarPage.scss'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useSearch } from '../hooks/useSearch';


export const BuscarPage = () => {

  const { searchText, onHandleChange } = useForm({
    searchText: ''
  });
  const { getPostsByAuthor } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse( location.search );
  const serchValue = query.q ?? '';
  const posts = getPostsByAuthor( String(serchValue) );

  
  

  const onSubmitSearch = ( event: React.FormEvent ) => {
    event.preventDefault();
    if(searchText?.trim() == '') return;
    navigate(`?q=${searchText?.toLowerCase().trim()}`);
    console.log({posts})
  };




  return (
    <div className="buscar-page-content">
      <div>
        <h2>Buscar por autor</h2>
        <hr />
        <form onSubmit={(event) => onSubmitSearch(event) }>
          <input 
            type="text"
            placeholder="Busca posts por autor"
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

      <div>
        <h2>Resultados</h2>
        <div>No existe ningún resultado para "<b>{query.q}</b>"</div>

        <div>{ }</div>
      </div>

      <div>

      </div>
    </div>




  )
}
