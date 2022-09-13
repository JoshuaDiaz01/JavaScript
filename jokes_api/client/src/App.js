import {Link, Navigate, Route, Routes} from 'react-router-dom'
import './App.css';
import {AllJokes} from '.views/AllJokes';
import {OneJoke} from '.views/OneJoke';
import {NewJoke} from '.views/NewJoke';
import {EditJoke} from '.views/EditJoke';
import {NotFound} from '.views/NotFound';



function App() {
  return (
    <div className="container">

    {/* front end routing to display views */}
    <Routes>
      {/* redirect example */}
      <Route path = "/" element = {<Navigate to = "/jokes" replace></Navigate> } ></Route>
      <Route path = "/jokes" element = {< AllJokes/>} ></Route>
      <Route path = "/jokes/edit/:id" element = {<EditJoke></EditJoke>} ></Route>
      <Route path = "/jokes/:id" element = {<OneJoke></OneJoke>} ></Route>
      <Route path = "/jokes/new" element = {<NewJoke></NewJoke>} ></Route>
      <Route path = "*" element = {<NotFound></NotFound>} ></Route>
    </Routes>

    </div>
  );
}

export default App;
