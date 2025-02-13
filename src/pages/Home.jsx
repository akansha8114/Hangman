import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect } from "react";
//import { useState } from "react";
//import { WordContext } from '../Context/WordContext.js';
import WordStore from "../stores/WordStore";

function Home(){
    
    //const {  setWord} = useContext(WordContext); //useconetxt is a hook which is used to access the context which is created in App.js

    const {setWordList,setWord} = WordStore();//coming from the store


    //this fetchword function will be called when the component mounts means jb home page load hoega tb ye fetch function load hoga
    //fetch function me ky h ??, in this hum api(network call) ke help se data fetch kr rhe h json file se 
    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        console.log(data);

        setWordList([...data])

        //this is for randomly generating a index number form the backened given data

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);

        //jo v word select hua h vo upr word me store hoga
        setWord(data[randomIndex].wordValue);
    }
 
    //useeffect bta rha h vo data kitna baar kb load hoga so it is called when the component mounts only
    useEffect(()=>{
        fetchWords();
    },[]);

    return (
        <>
           <Link to='/play' >
              <Button text="Single player Game" ></Button>
           </Link>
           <br/>

           <Link to="/start">
              <div className = "mt-4">
                <Button text = "Multiplayer Game" styleType="secondary"></Button>
              </div>
              
            </Link>
        </>
    )

    
}
export default Home 