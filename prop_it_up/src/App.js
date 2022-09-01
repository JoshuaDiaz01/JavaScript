import React from 'react';
import './App.css';

import MyNewComponent from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
      <MyNewComponent firstName="Jane " lastName="Doe" age= {25} hairColor = "brown"/>
      <MyNewComponent firstName="John " lastName="Smith" age={99} hairColor = "black"/>
      <MyNewComponent firstName="Millard " lastName="Fillmore" age={40} hairColor = "brown"/>
      <MyNewComponent firstName="Maria " lastName="Smith" age={50} hairColor = "purple"/>
    </div>
  );
}

export default App;
