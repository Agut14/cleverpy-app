import { postResponse } from "../../interfaces/postInterface";

export const initialPostStateFixture: postResponse = {
    posts: [],
    isLoading: false,
    isError: false,
    post: {}
};

export const postFixtureDeleted: postResponse = {
    posts: [],
    isLoading: false,
    isError: false,
    post: {},
    postDeleted: 2
};

  export const initialPostFixtureWithPost: postResponse = {
    posts: [],
    isLoading: false,
    isError: false,
    post: {
        userId: 1,
        id: 2,
        title: 'Hola Mundo',
        body: 'Gracias por la oportunidad'
    }
};  

export const postFixture = {
    userId: 1,
    id: 2,
    title: 'Hola Mundo',
    body: 'Gracias por la oportunidad'
}

export const initialPostStateFixtureFull: postResponse = {
    posts: [{
        userId: 1,
        id: 2,
        title: 'Hola Mundo',
        body: 'Gracias por la oportunidad'
    }],
    isLoading: false,
    isError: false,
    post: {}
  };

  