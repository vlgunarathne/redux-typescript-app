import * as actions from './UserTypes'

const initialState = {
    loading: true,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case actions.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case actions.FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer