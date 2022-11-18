import logo from './logo.svg';
import './App.css';
import {getErrorResponse, getUser, getUsers} from "./services";
import {User} from './components';
import {useState} from "react";

function App() {
  //starting state as null
  const [users, setUsers] = useState(null);
  const [usersError, setUsersError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetUsersOnClick = () => {
    setIsLoading(true);
//get users  and set them to data thats retreived 
    getUsers()
      .then((data) => setUsers(data.users))
  }



  return (
<div>
  <button onCliick = {handleGetUsersOnClick} type="button" >Get Users</button>
</div>


  );
}

export default App;
