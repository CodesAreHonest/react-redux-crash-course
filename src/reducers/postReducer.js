import { FETCH_POSTS, NEW_POSTS } from '../actions/type';

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POSTS:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}
