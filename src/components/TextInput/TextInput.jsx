//this will expext the text ka input

function TextInput({type="text",label,placeholder="Enter text",onChangeHandler}){
    return(
        <label>
            <span className="text-gray-700">{label}</span>
            <input 
              type={type}
              className="px-4 py-2 border border-gray-500 rounded-md w-full"
              placeholder= {placeholder}
              onChange= {onChangeHandler}
            
            />
        </label>
    )
}

export default TextInput