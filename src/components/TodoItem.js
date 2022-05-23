import React,{useState,useEffect} from "react"
import ReactDOM from "react-dom"
import { FaTrash } from "react-icons/fa"
function TodoItem(props) {


  // adding style when checkbox is completed(true)
  const completedStyle= {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
 //saving id,completed & title as variable
  const{id,completed,title}=props.todo

  //editing of todo item 
  const[state,setState] = useState({
    editing:false
  })

  function handleEditing(id){
    setState({
      editing:true,
    })
    // console.log("Editing todo",id)
  }
  let viewMode = {}
  let editMode = {}

  if (state.editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }
  //clearing of editing input after edit
  function handleUpdatedDone (event) {
    if (event.key === "Enter") {
      setState({ editing: false })
    }
  } 
  useEffect(() => {
      return () => {
        console.log("Cleaning up...",id)
      }
    }, [])


  return(
      <li className="todoItem">
        <div onDoubleClick={handleEditing} style={viewMode}>
          <input 
            type="checkbox"
            className="checkbox" 
            checked={completed}

            //toggling of input checkbox 
            onChange={() => props.handleChangeProps(id)}
          /> 
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
          <button 
          //deleting of todoItem
            onClick = {() => props.delTodoProps(id)}
          >
           <FaTrash className="delete-icon"/>
          </button>
        </div>
        
        <input 
          type="text" 
          className="textInput" 
          style={editMode}
          value={title}
          onChange={e => {
            props.setUpdateProps(e.target.value, id)
          }}
          onKeyDown={handleUpdatedDone}
        />
      </li>
    )
}
export default TodoItem