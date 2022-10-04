import { authReducer } from '../../context/authReducer';
import { authTypes } from '../../auth/types';

export{};

describe('Auth reducer', () => {

    test('set Login correctly', () => {

        const newUsername = 'Carlos';

        const state = authReducer({ logged: false, username: ''}, { type: 'Auth Login', payload: { username: newUsername}});
        expect(state).toEqual({
            logged: true,
            username: newUsername
        })

    })

    test('set Logout correctly', () => {

        const state = authReducer({ logged: false, username: ''}, { type: 'Auth Logout', payload: { username: ''}});
        expect(state).toEqual({
            logged: false,
            username: ''
        })

    })
})