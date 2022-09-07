
import { useParams } from "react-router";
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Planet from './components/Planet';
import People from './components/People';
import Error from './components/Error'

function App() {
  return (
    <div className="App">

    <Home/>
    <Routes>
      <Route path = "/people/:id" element= {<People/>}/>
      <Route path = "/planet/:id" element= {<Planet/>}/>
      <Route path = "/error" element = {<Error/>}/>
    </Routes>
    </div>
  );
}

export default App;
