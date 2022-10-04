import { setUsers, userSlice } from "../../app/slices/user/userSlice";
import { initialUserStateFixture, initialUserStateWithUsers } from '../fixtures/usersStateFixtures';

export{};

describe('usersSlice', () => {

    test('should return correct slice name and correct initialValue', () => {

        expect(userSlice.name).toBe('users');
        const state = userSlice.reducer( initialUserStateFixture, {type:''});
        expect(state).toEqual( initialUserStateFixture );
    })

    test('should setUsers correctly', () => {

        const state = userSlice.reducer( initialUserStateFixture, setUsers( initialUserStateWithUsers ));
        expect(state).toEqual(initialUserStateWithUsers)
    })
})    