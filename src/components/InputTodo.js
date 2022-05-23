import React,{useState,useEffect} from "react"
import ReactDOM from "react-dom"
import { FaPlusCircle } from "react-icons/fa"
function InputTodo(props) {
  const[userInput,setUserInput] = useState({
    title:""
  })
  //input onchange function
  function onChange(event){
    setUserInput({
      title:event.target.value
    })
  }
  //submission of the input text
    function handleSubmit(e){
      e.preventDefault();
      if(userInput.title.trim()){
        props.addTodoProps(userInput.title)
        //clearing of userInput after submission
        setUserInput({
          title:""
        }) 
      }
      else{
        alert("Please write item")
        }
    }


  return(
    <form onSubmit={handleSubmit} className="form-container">
      <input
       type="text" 
        className="input-text"
       placeholder="Add todo..." 
       value={userInput.title}
       onChange={onChange}
       />
      <button className="input-submit">
        <FaPlusCircle className="submit-icon" />
      </button>
    </form>
    )
}
export default InputTodo