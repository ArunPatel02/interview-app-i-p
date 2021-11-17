import React from 'react'
import './App.css';
import Homepage from './components/Homepage';
import {appointies} from "./appointies"
import { Appointiesdata } from './context/Appointiesdata';

function App() {
  console.log(appointies)
  return (
    <Appointiesdata>
    <div className="App">
      <Homepage />
    </div>
    </Appointiesdata>
  );
}

export default App;
