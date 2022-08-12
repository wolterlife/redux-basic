import React, {useState} from "react";
import './Todo.css';
import BackButton from "../BackButton/BackButton";
import {taskAdd} from "../../store/actions/actionsTodo";
import {useDispatch} from "react-redux";

const Todo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('')
  return (
    <div className={"todo"}>
      <BackButton/>
      <p className={'textDescription'}>Список задач</p>
      <div className={"addContainer"}>
        <input onChange={e => setText(e.target.value)} className={'addInput'}/>
        <button onClick={() => dispatch(taskAdd(text))} className={"addButton"}>Add</button>
      </div>
      <div className={'taskContainer'}>
        <input disabled={false} className={"taskInput"}/>
        <button className={"buttonTask"}>Upd</button>
        <button className={"buttonTask"}>X</button>
        <button className={"buttonTask"}>✓</button>
      </div>

    </div>
  )
}

export default Todo;
