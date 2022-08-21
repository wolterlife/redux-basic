import {useDispatch, useSelector} from "react-redux";
import {taskDell, taskEditable, taskStatus} from "../../store/actions/actionsTodo";
import React, {useState} from "react";

const TodoItem = () => {
  const dispatch = useDispatch();
  const [isTaskDisable, setTaskDisable] = useState(true)

  return (
    useSelector(state => state.taskList).map(item =>
    <div key={item.id} className={'taskContainer'}>
      <input disabled={!item.editNow} defaultValue={item.text} className={(item.complete ? "taskInputComplete" : "taskInput")}/>
      <button onClick={() => dispatch(taskEditable(item.id))} className={"buttonTask"}>Upd</button>
      <button onClick={() => dispatch(taskDell(item.id))} className={"buttonTask"}>X</button>
      <button onClick={() => dispatch(taskStatus(item.id))} className={"buttonTask"}>✓</button>
    </div>
    )
  )
}

export default TodoItem;