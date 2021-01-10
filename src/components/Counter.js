import React from "react";
import {increment, decrement, reset} from "../state/actions/count";
import {Button} from '@material-ui/core';
import {useSelector, useDispatch} from "react-redux";


function Counter() {
    const count = useSelector((state) => state.counter.count_value)
    const dispatch = useDispatch()
    return (
        <React.Fragment>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <Button onClick={() => dispatch(increment())}>
                increment
            </Button>
            <Button onClick={() => dispatch(decrement())}>
                decrement
            </Button>
            <Button onClick={() => dispatch(reset())}>
                reset
            </Button>
        </React.Fragment>
    );
}

export default Counter;

