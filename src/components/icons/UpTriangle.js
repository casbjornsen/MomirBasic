import React from 'react'

function UpTriangle(props){
    return(
        <svg xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        fill={props.color}
        viewBox="0 0 481.72 481.721">
            <path d="M471.253 335.129L272.396 82.226c-17.417-30.533-45.661-30.533-63.078 0L10.473 335.098c-3.88 5.533-8.072 15.41-8.917 22.117-2.736 21.738-4.908 65.18 21.444 65.18h435.707c26.353 0 24.192-43.416 21.463-65.148-.844-6.714-5.031-16.579-8.917-22.118z"/>
        </svg>
    );
}

export default UpTriangle;
