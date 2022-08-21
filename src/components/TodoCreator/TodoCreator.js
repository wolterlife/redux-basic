import React, {useState} from "react";
import {taskAdd} from "../../store/actions/actionsTodo";
import {useDispatch} from "react-redux";


const TodoCreator = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch();

  const buttonAdd = text => {
    dispatch(taskAdd(text));
    setText('');
  }

  return (
    <>
      <p className={'textDescription'}>Список задач</p>
      <div className={"addContainer"}>
        <input value={text} onChange={e => setText(e.target.value)} className={'addInput'}/>
        <button onClick={() => buttonAdd(text)} className={"addButton"}>Add</button>
      </div>
    </>)
}

export default TodoCreator;
