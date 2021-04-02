import React from 'react'

function ContextContainer (props){
    return (
        <div 
            style={{
            display: props.isActive ? 'block' : 'none',
            position: 'fixed',
            zIndex: 10,
            top: props.mousePosition.y + (props.offsetY ?? 0),
            left: props.mousePosition.x + (props.offsetX ?? 0),
            ...props.style
            }}>
                {props.contents}
        </div>
    )
}

export default ContextContainer;