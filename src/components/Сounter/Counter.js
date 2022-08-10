import React from "react";
import './Counter.css'
import {useDispatch, useSelector, useStore} from "react-redux";
import BackButton from "../BackButton/BackButton";

const Counter = () => {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  return (
      <div className={"counter"}>
        <BackButton />
        <p className={'counter__text'}>{count}</p>
        <button onClick={() => dispatch({type: "DECREMENT"})} className={"counter__button"}>-</button>
        <button onClick={() => dispatch({type: "INCREMENT"})} className={"counter__button"}>+</button>
      </div>
  )
}

export default Counter;
