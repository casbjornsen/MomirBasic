import React from "react";

function ImageInput(props) {
    return(
        <div>
            <img src={props.imgSrc} alt={props.imgAlt} className={props.className}/>
            <br />
            <input
                type={props.inputType}
                name={props.inputId}
                min={props.min}
                max={props.max}
                onChange={props.onChange}></input>
        </div>
    )
}

export default ImageInput;