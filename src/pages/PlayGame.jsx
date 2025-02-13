import { Link } from "react-router-dom"
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/Hangman/Hangman";
//import { WordContext } from '../Context/WordContext.js';
import WordStore from "../stores/WordStore";
function PlayGame() {
   
    //const {state} = useLocation(); //uselocation ke help se hum state me jo v value h use destructure kr skte h

    //const {  word } = useContext(WordContext);

    const {wordList, word} = WordStore() ;

    const [guessedLetters, setGuessedLetters] = useState([]); //we want har guessedletter ke sth  UI change ho islie ek state varaible bnadia

    const [step, setStep] = useState(0); //hangman ke images me change aae to update krne ke lie

    function handleLetterClick(letter) {
        if(word?.toUpperCase().includes(letter)){
            console.log("Correct Guess");
        }
        else{
            console.log("Wrong Guess");
            setStep(step + 1);
        }
    


        setGuessedLetters([...guessedLetters, letter]);
         //adding the letter to the array and makin a new array and newobjet
    }   //this function will be called when the user clicks on a letter button
    
    return(
        <>
            <h1>Play Game </h1>
            {wordList.map((word) => {
              return <li key={word.id}>{word.wordValue}</li>
            })}
            {word && ( //it tells agr word selected hoga tbhi niche wala code run hoga , it si a type of conditional rendering
                <>
                 <Maskedtext text={word} guessedLetters={guessedLetters} />
            <div>
                <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
            </div>

            <div>
                <HangMan step={step} />
            </div>
                </>
            )}
            

            <Link to='/start' className = "text-blue-400" >Start Game Link</Link>
        </>
    );
   }
export default PlayGame