import logo from './logo.svg';
import './App.css';
import {getErrorResponse, getUser, getUsers} from "./services";
import {LoadingSpinner, User} from './components';
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
      .catch((error) => setUsersError(error))
      .finally(()=> setIsLoading(false));
  }



  return (
<div>
  <button onClick = {handleGetUsersOnClick} type="button" >Get Users</button>


{/* this User card is being imported from components and only showing firs name las name and user id */}
    {
      users && (
        <section>
          {users.map((user) => {
            return <User key = {user.id} user = {user}></User>
          }
          )}
        </section>
      )
    }

</div>


  );
}

export default App;
