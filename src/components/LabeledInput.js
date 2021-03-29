import React from "react";

function LabeledInput(props) {
    return(
        <div className={props.className}>
            <label htmlFor={props.labelId}>{props.labelText}</label>
            <br />
            <input 
                type={props.inputType}
                name={props.labelId}
                onChange={props.onChange}
                value={props.inputValue}
                ></input>
        </div>
    )
}

export default LabeledInput;