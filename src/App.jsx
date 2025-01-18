import './App.css'
import {Route,Routes} from 'react-router-dom'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import { useState } from "react";
import Home from './pages/Home'
import { WordContext } from './Context/WordContext.js';
function App() {
  //I want to store a statevaraible in this WordContext.Provider
  const [wordList, setWordList] = useState([]);
  const [word,setWord] = useState('');

  return (
    /* in this Routes component several small Route components are used */
    /*niche ab value={{ wordList, setWordList }} isse ye words har jagah available ho jaenge */
    <WordContext.Provider value={{ wordList, setWordList, word, setWord}}>
       <Routes>
        <Route path='/start' element={<StartGame/>}/>
        <Route path='/play' element={<PlayGame/>}/> 
        <Route path='/' element={<Home />} />
      </Routes>
    </WordContext.Provider>
     

      
    
    
        /*  e.target.value: This expression gets the current value of the input field. So, whenever the user types or modifies the text, this value changes */
  );
}

export default App
//ye WordConetxt.Provider ek wrapper h ise agr app ke around wrap kro to puri ki puri hierachy me WordContext functality enable hogi
