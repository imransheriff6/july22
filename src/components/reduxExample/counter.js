import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,selectCount } from './logic'
function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <label>{count}</label>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}
export default Counter