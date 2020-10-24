import axios, { AxiosResponse } from 'axios';
import * as actions from './UserTypes'

export const fetchUsersRequest = () => {
    return {
        type: actions.FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users: any) => {
    return {
        type: actions.FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error: any) => {
    return {
        type: actions.FETCH_USERS_FAILURE,
        payload: error
    }
}
// This is also an action creator similar to the above.
// Here, thanks to thunk middleware, we are able to return a function instead of an action in comparison to
// the action creators above.
// This returned function also receives the dispatch as a parameter.
export const fetchUsers = () => {
    return (dispatch: any) => {
        dispatch(fetchUsersRequest)
        // Used the setTimeout to simulate a network delay
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    const users = response.data;
                    dispatch(fetchUsersSuccess(users));
                })
                .catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchUsersFailure(errorMsg));
                })
        }, 5000);
        // axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(response => {
        //     const users = response.data;
        //     dispatch(fetchUsersSuccess(users));
        // })
        // .catch(error => {
        //     const errorMsg = error.message;
        //     dispatch(fetchUsersFailure(errorMsg));
        // })
    }
}