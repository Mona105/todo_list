import './App.css';
import React, {useState, useEffect} from 'react'
import TodoItem from './Components/todoItem'
import AddTodo from './Components/addTodo'
import EditTodoRoute from './Components/editTodoRoute'

import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));  
  }
  const onDelete = (todosToDelete) =>
  {
    console.log("i am ondelete");
    const filteredTodos = todos.filter((el) => {
      return el !== todosToDelete;
    });
  
    // Update todos with the filtered array
    setTodos(filteredTodos);
    
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);
  
  const handleSave = (index, editedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = editedTodo;
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const addTodo = (todoList) =>
  {
     console.log("add my item ", todoList);
    //  let todoCount;
    //  if (todos.length === 0) {
    //   todoCount = 0
    //  }
    //  else
    //  {
    //   todoCount= todos[todos.length-1].sno + 1;
    //  }
    
     setTodos([...todos, todoList]);
     
     console.log(todoList);
     
  }
  
 
  const navigateToTodoList = () => {
    // Implement navigation logic here
    // For example, you can use window.location or any other navigation method you prefer
    window.location.href = '/';
  };
  
  const [todos,setTodos] = useState(initTodo);
    useEffect(()=>
    {
      localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])
console.log("====11111======>", todos);
  return (
   <>
  
   < Router>
   <Routes>

    <Route path="/add" element={<AddTodo addTodo={addTodo}  navigateToTodoList={navigateToTodoList}  />} /> 
    <Route
          path="/"
        
          element={ <TodoItem todoList={todos} onDelete={onDelete}/>}
        />
    
    <Route
  path="/edit/:index"
  element={<EditTodoRoute todos={todos} handleSave={handleSave} />}
/>
             
          
      
    </Routes>
    </Router>
   
   
    
   </>
  );
}
export default App;
