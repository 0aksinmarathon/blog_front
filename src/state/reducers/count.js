import {INCREMENT, DECREMENT, RESET} from "../actions/count";

const initialState = {count_value: 0}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {count_value: state.count_value + 1}
        case DECREMENT:
            return {count_value: state.count_value - 1}
        case RESET:
            return initialState
        default:
            return state
    }
}

export default counter;
