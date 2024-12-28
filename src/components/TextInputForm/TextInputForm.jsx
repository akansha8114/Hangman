import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
//import TextInputFormContainer from "../TextInput/TextInput";


function TextInputForm({inputtype,handleFormSubmit,handleTextInputChange,handleshowhideclick}) {
  
    return(
     
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                    type= {inputtype}
                    label="Enter some text"
                    placeholder="Enter some text here"
                    onChangeHandler={handleTextInputChange}
                />
            </div>

            <div>
                <Button 
                text = {inputtype === "password" ? "Show" : "Hide"} 
                styleType="warning"
                onClickHandler = {handleshowhideclick}
                
                />
            </div>
              <Button
                type="submit"
                styleType="primary"
                text = "Submit"
              />
            <div>

            </div>
        </form>
    );
}
export default TextInputForm


//Design Pattern -> Presenter container Pattern
//it syas ki aapka koi v component h to uss component ko do layer me visualise kro
//First is presentation layer and second is container/logical
//and container kayer will call the presentation layer
//taaki hum alg alg container layer ke lie same presentation layer use kr ske