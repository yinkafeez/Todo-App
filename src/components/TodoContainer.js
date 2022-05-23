import React,{useState,useEffect} from "react"
import ReactDOM from "react-dom"
import {Route,Routes} from "react-router-dom"
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList.js"
import Header from "./Header.js"
import InputTodo from "./InputTodo.js"
import Navbar from "./Navbar"
import About from "../pages/About"
import AboutApp from "../pages/AboutApp.js"
import AboutAuthor from "../pages/AboutAuthor.js"
import NotMatch from "../pages/NotMatch"
function TodoContainer() {
  const [todos,setTodos] = useState(getInitialTodos());

  // onChange function of TodoItem
  function handleChange(id){
    setTodos( prevState =>     
       prevState.map(todo => {  
        if (todo.id === id) {     
          todo.completed = !todo.completed;   
        }    
          return todo;  
      })  
    );
  }
  //onclick function of deleting todo item
    function delTodo(id) {
      setTodos([
        ...todos.filter(todo => {
          return todo.id !==id;
        })
        ]
      )
    }
    //adding of title in the user input to the todo item on pressing the submit button 
    function addTodo(title) {
        const newTodo = {
        //using random id from    
         id: uuidv4(), 
         title: title,  
         completed: false 
        };
          setTodos([
            ...todos, newTodo
            ]);
    };
    //editing of todo item
    function setUpdate (updatedTitle, id) {
      setTodos(
         todos.map(todo => {
          if (todo.id === id) {
            todo.title = updatedTitle
          }
          return todo
        }),
      )
    }
    //storing of todo item in the local storage 
    useEffect(() =>{
      // console.log("test run")
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    },[todos])

    // getting stored items from the local storage when the website onMount(reload)
    function getInitialTodos() {
      // getting stored items
      const temp = localStorage.getItem("todos")
      const savedTodos = JSON.parse(temp)
      return savedTodos || []
    } 
    // AboutData variable
    const aboutData = [
      {
        slug: "about-app",
        title: "About the App",
        description:
          "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
      },
      {
        slug: "about-author",
        title: "About the Author",
        description:
          "This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic.",
      },
    ]
      
    return(
      <>

        <Navbar />
        <Routes>
          <Route path="/"
            element={
              <div className="container">
                <div className="inner">
                  <Header />
                  <InputTodo addTodoProps={addTodo} />
                  <TodosList 
                    todos={todos}
                    //passing of onchamge function of Todoitem through props to TodosList 
                    handleChangeProps={handleChange}
                    //passing of onclick function of deleting todo item through props to TodosList
                    delTodoProps={delTodo}
                    //passing of editing todo item function through props to Todoslist
                    setUpdateProps={setUpdate}
                  />
                </div>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="about/about-app" element={<AboutApp />} />
          <Route path="about/about-author" element={<AboutAuthor />} />
            
          <Route path="*" element={<NotMatch />} />   


      </Routes>


        
        
      </>

    )
  
  }
export default TodoContainer