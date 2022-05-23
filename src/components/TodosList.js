import React,{useState} from "react"
import ReactDOM from "react-dom";
import TodoItem from "./TodoItem.js";
function TodosList(props) {
  return (
    <ul>
        {props.todos.map(todo =>(
         <TodoItem
          key= {todo.id} 
          todo={todo}
          // props of onchange function defined in the todo container to TodoItem
          handleChangeProps={props.handleChangeProps}
          //passing of onclick function of deleting todo item through props to TodoItem
          delTodoProps={props.delTodoProps} 
          //passing of editing todo item function through props to TodoItem
          setUpdateProps={props.setUpdateProps}
         />
        ))} 
    </ul>   
  )
}
export default TodosList  