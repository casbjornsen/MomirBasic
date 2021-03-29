import React from 'react'

function DownTriangle(props){
    return(
        <svg xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        fill = {props.color}
        viewBox="0 0 481.728 481.728">
            <path d="M10.467 146.592l198.857 252.903c17.417 30.532 45.661 30.532 63.085 0l198.839-252.867c3.886-5.532 8.072-15.41 8.923-22.118 2.735-21.738 4.908-65.178-21.444-65.178H23.013c-26.353 0-24.192 43.415-21.463 65.147.845 6.709 5.037 16.581 8.917 22.113z"/>
        </svg>
    );
}

export default DownTriangle;