import React, { useEffect } from 'react';

function ContextMenu(props){

    const menuId = props.targetId + "_contextMenu";

    const onMouseLeave = () => {
        props.deactivateContext();
    }

    useEffect(() => {
        let element = document.getElementById(menuId);
        element.addEventListener("mouseleave", onMouseLeave);

        return () => {
            element.removeEventListener("mouseleave", onMouseLeave);
        }
    });

    const zoneMovementButtons = props.validMoveDestinations.map((x, idx) => {
        const onClick = () => {
            x.sendFunction();
            props.onClose();
        }
        return <button key={idx} onClick={onClick}>{x.displayName}</button>
    });
    return (
        <div id={menuId} className="right-click-context">
            <div>{props.contextHeader}</div>
            {zoneMovementButtons}
            <br />
            <br />
            <button onClick={props.onClose}>Close</button>
        </div>
    )
}

export default ContextMenu;