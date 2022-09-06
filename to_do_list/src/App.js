import React, {useState} from "react";
import './App.css';
import Todo from './components/Todo'

function App() {
//making new todo and using ("") for input box starting value of state
//this line is short hand for the newTodoStateArr[0],[1]
  const [newTodo, setNewTodo] = useState("");
  //empty array for mapping 
  const [todos, setTodos] = useState([]);


  //todo function
  const handleNewTodoSubmit = (e) => {
    //prevent from refreshing page
    e.preventDefault();

    if(newTodo.length === 0){
      return;
    }
    //creating const to check state of item with the checkbox
    const todoItem = {
      text: newTodo, 
      complete: false
    }

    console.log(newTodo);
    //setting the state that includes all the old todos, and the newtodos
    setTodos([...todos, todoItem]);
    //clearing state after submit
    setNewTodo("");
    //delete button
  }

  const handleTodoDelete = (delIdx) => {
    //give new list with all items minus one item removed
    const filteredTodos = todos.filter((todo, index) => {
      //when index isnt = to del idx, keep it
      return index !== delIdx;
    })

    //have a new array
    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    //create new array with all same items but one changed
    const updatedTodos = todos.map((todo, index) => {
      if(idx === index){
        todo.complete = !todo.complete;

        //to avoid mutating todo directly do this:
        // const updatedTodos = {...todo, complete: !todo.complete};
        // return updatedTodos
      }
      return todo;
    }
    )
    setTodos(updatedTodos)
  }

  return (
    <div style = {{textAlign: "center"}} className="App">
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }
      }>
        {/* on change will set new to do to the target value from the input */}
        <input onChange ={(event) => {
          setNewTodo(event.target.value);
        }} 
        type="text"
        // value will set input box to empty string
        value = {newTodo}
        ></input>
        <div>
          <button>Add todo</button>
        </div>
      </form>

      <hr></hr>

      {
        todos.map((todo, index) =>{
          return <Todo todo={todo} handleToggleComplete={handleToggleComplete} index = {index} handleTodoDelete= {handleTodoDelete}></Todo>
        })
      }

    </div>
  );
}

export default App;
