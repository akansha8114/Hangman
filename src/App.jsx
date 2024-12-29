import './App.css'
import {Route,Routes} from 'react-router-dom'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import Home from './pages/Home'
function App() {

  return (
    /* in this Routes component several small Route components are used */
    
    
      <Routes>
        <Route path='/start' element={<StartGame/>}/>
        <Route path='/play' element={<PlayGame/>}/> 
        <Route path='/' element={<Home />} />
      </Routes>

      
    
    
        /*  e.target.value: This expression gets the current value of the input field. So, whenever the user types or modifies the text, this value changes */
  );
}

export default App
