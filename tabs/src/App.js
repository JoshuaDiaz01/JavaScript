
import './App.css';
import React, {useState} from 'react';
import Tabs from './components/tabs';


function App() {
  const items =  [
    {tab: 'Tab 1', content: 'This is tab one content'},
    {tab: 'Tab 2', content: 'This is tab two content'},
    {tab: 'Tab 3', content: 'This is tab three content'}
  ]


  return (
    <div className="App">
      <Tabs itemArray = {items}></Tabs>

    </div>
  );
}

export default App;
