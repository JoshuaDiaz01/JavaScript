import { useParams } from "react-router";
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
//Remember, we can write these functional components in their own files 
//to be exported and imported to the App component.
//We've combined them here to simplify our example.
const Home = (props) => { 
  return (
    <h1 style={{color: "red"}}>Welcome Home</h1>
  );
}

//num or word
const OneWord = (props) => {
  const {word} = useParams();
  if (isNaN(word)){
    return (
      <h1>The word is: {word}</h1>
    )
  }
  else{
    return(
      <h1>The number is: {word}</h1>
    )
  }
}

const ThreeWords = (props) => {
  const {word, font, background} = useParams();
  return(
    <div style = {{backgroundColor: background}}>
      <h1 style= {{color: font}}>The word is: {word}</h1>
    </div>
  )
}
    
function App() {
  return (
    <div>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/:word/:font/:background" element={<ThreeWords />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/:word" element={<OneWord />} />
        
      </Routes>
    </div>
  );
}
    
export default App