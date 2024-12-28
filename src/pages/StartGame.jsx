//in pages folder saare pages ke design jsx code rhega 
//in this startGame -> startGame ke folder mei jsx code h
//In jsx ek function me multiple  tags nhi return kr skte ,ek hi parent tag return krna hoga but <div> will take a faltu ka memory
//so we use fragments <></> to avoid that, it will not produce any extra node in the dom
import { Link } from "react-router-dom"  
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer"
function StartGame(){
    return(
         <>          
            <h1>Start Game</h1>
            <TextInputFormContainer/>
            <Link to='/play' className = "text-blue-400" >Play Game Link</Link>
        </>
    )
}

export default StartGame