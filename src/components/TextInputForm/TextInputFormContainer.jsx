import TextInputForm from "./TextInputForm";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
function TextInputFormContainer(){

    const[inputtype, setinputtype] = useState("password");
    //this value will take the current value of the input field
    //so whenever the user types or modifies the text, this value changes
    //setvalue is a function which will set the value of the input field
    //show in the backened ki bhyi word ky h inputtype
    // usestate : Adds state to a component, updates state based on the previous state, and updates objects and arrays in state
    const[value,setvalue]=useState("");

    const navigate = useNavigate();  //use navigate is used to navigate to another page

    function handleFormSubmit(Event){
        Event.preventDefault();   // it lets you control the default actions the browser typically executes.
        console.log("Form Submitted",value);
        if(value){
            //if we have somehting valid value then we want to navigate to next page
            navigate(`/play`, {state: {wordSelected: value}}); 
            //ye state property me hum value pass kr skte h 
            //hum jo v page pe navigate ho rhe h wha pe hum state property me jo v data save hoga vo use kr skte h
        }
    }

    function handleTextInputChange(Event){
        console.log("Input Changed");
        console.log(Event.target.value);
        setvalue(Event.target.value);
    }

    function handleshowhideclick(){ 
        console.log("Show / Hide Clicked");
        //toggling the inputtype on clicking the button
        if(inputtype === "password"){
            setinputtype ("text"); 
        }
        else{
            setinputtype("password");
        }
        console.log(inputtype);
    }

    return (
        <TextInputForm 
          inputtype = {inputtype}
          handleFormSubmit={handleFormSubmit}
          handleTextInputChange={handleTextInputChange}
          handleshowhideclick = {handleshowhideclick}
        />
    );

    
}
export default TextInputFormContainer