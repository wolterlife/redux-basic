import React from "react";
import './Counter.css'
import {useDispatch, useSelector, useStore} from "react-redux";

const Counter = () => {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className={"counter"}>
      <p className={'counter__text'}>{count}</p>
      <button onClick={() => dispatch({ type: "DECREMENT" })} className={"counter__button"}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })} className={"counter__button"}>+</button>
    </div>
  )
}

export default Counter;
