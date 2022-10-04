
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../app/pages/SearchPage';
import { Provider } from 'react-redux';
import { store } from '../../store/store';


export{};

describe('Buscar page testings', () => {

    
    test('renders default values correctly', () => {

        const { container } = render(
            <Provider store={store}>
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
            </Provider>
        )
        
        expect( container ).toMatchSnapshot();

    })
})