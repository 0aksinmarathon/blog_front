import { SET_TOKEN, RESET_TOKEN } from 'state/actions/user/token'

const token = (state = '', action) => {
    switch (action.type) {
        case SET_TOKEN:
            console.debug(action)
            console.debug(action.token)
            return {...state,
                    token: action.token}
        case RESET_TOKEN:
            return {...state,
                    token: ''}
        default:
            return state
    }
}

export default token;
