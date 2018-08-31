import { FETCH_POSTS, NEW_POSTS} from "./type";

export const fetchPosts = () => dispatch => {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );

};

export const createPosts = (postData) => dispatch => {
    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(posts => dispatch({
            type: NEW_POSTS,
            payload: posts
        }));

};
