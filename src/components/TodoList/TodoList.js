import React, {useState} from "react";
import './TodoList.css';
import BackButton from "../BackButton/BackButton";
import TodoCreator from "../TodoCreator/TodoCreator";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {

  return (
    <div className={"todo"}>
      <BackButton/>
      <TodoCreator />
      <TodoItem />
    </div>
  )
}

export default TodoList;
