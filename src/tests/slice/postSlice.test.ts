import { postSlice, setPostDeleted, setPosts, setPostsById } from '../../app/slices/post/postSlice';
import { initialPostFixtureWithPost, initialPostStateFixture, initialPostStateFixtureFull, postFixture, postFixtureDeleted } from '../fixtures/postStateFixtures';
export{};

describe('usersSlice', () => {

    test('should return correct slice name and correct initialValue', () => {
        expect(postSlice.name).toBe('posts');
        const state = postSlice.reducer( initialPostStateFixture, {type:''});
        expect(state).toEqual( initialPostStateFixture );
    })

    test('should setPosts correctly', () => {
        const state = postSlice.reducer( initialPostStateFixture, setPosts( initialPostStateFixtureFull ));
        expect(state).toEqual(initialPostStateFixtureFull)
    })

    test('should setPostsById correctly', () => {
        const state = postSlice.reducer( initialPostStateFixture, setPostsById( postFixture ));
        expect(state).toEqual(initialPostFixtureWithPost)
    })

    test('should setPostDeleted correctly', () => {
        const state = postSlice.reducer( initialPostStateFixture, setPostDeleted( 2 ));
        expect(state).toEqual(postFixtureDeleted)
    })
})  