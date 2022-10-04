import { authTypes } from '../../auth/types';

export{};
describe('Types on Types.ts', () => {

    test('are correct', () => {
        expect(authTypes).toEqual({
            login: 'Auth Login',
            logout: 'Auth Logout'
        });
    })
})