//props hume react se property milti h : it tells ki ho skta h hume alg alg buttons pe alg text chahie or on clicking every button we want different actions
// to be performed so props object provides us some attributes like text,onClickHandler so props property help us to di this

import getButtonStyling from "./getButtonStyling";
function Button({ text, onClickHandler, styleType="primary", type="button"}) {
    
    return(
        <button
          type={type}
           onClick = {onClickHandler}
           className= {`px-4 py-2 ${getButtonStyling(styleType)} text-white`}
            
        > 
            {text}
        </button>
    );
}



export default Button;