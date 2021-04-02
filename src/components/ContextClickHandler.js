import React, { useState, useEffect } from 'react';
import ContextMenu from './ContextMenu';
import ContextContainer from './ContextContainer';

function ContextClickHandler (props) {
    

    const [mousePosition, setMousePosition] = useState(
        {
            x: null,
            y: null
        });

    const [zoomActive, setZoomActive] = useState(false);
    const [contextMenuActive, setContextMenuActive] = useState(false); 

    useEffect(() => {
        
        let element = document.getElementById(props.targetId);
        element.addEventListener("contextmenu", handleContextMenu);
        element.addEventListener("mousedown", handleElementMouseDown);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            element.removeEventListener("mousedown", handleElementMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
            element.removeEventListener("contextmenu", handleContextMenu);
        }
    });

    const handleContextMenu = (ev) =>{
        ev.preventDefault();
        setMousePosition({ x: ev.clientX, y: ev.clientY });
        props.onSelectCard();
        setContextMenuActive(true);
        const menuId = props.targetId + "_contextMenu";
        let menuElement = document.getElementById(menuId);
        menuElement.addEventListener("mouseleave", deactivateContext);
    }

    const handleElementMouseDown = (ev) => {
        switch (ev.button){
            case 0:{
                if(contextMenuActive)
                    setContextMenuActive(false);
                return;
            }
            case 1:{
                setMousePosition({ x: ev.clientX, y: ev.clientY });
                if(props.zoomEnabled){
                    ev.preventDefault();
                    setZoomActive(true);
                }
                return;
            }
            case 2:{
                return;
            }
            default: return;
        }
    }

    const handleMouseUp = (ev) => {
        switch(ev.button){
            case 1:{
                if(props.zoomEnabled){
                    ev.preventDefault();
                    setZoomActive(false);
                }
                break;
            }
            default: return;
        }
    }

    const deactivateContext = (ev) => {
        if(zoomActive)
            setZoomActive(false);
        if(contextMenuActive)
            setContextMenuActive(false);
    }

    return (
        <div>
            {props.contents}
            <ContextContainer
                mousePosition={mousePosition}
                isActive={zoomActive}
                contents={<img id={props.targetId+"_zoomed"} className="zoomImage" src={props.zoomImage} alt=""/>}
            />
            <ContextContainer 
                mousePosition={mousePosition}
                isActive={contextMenuActive}
                contents={<ContextMenu 
                    contextHeader={props.contextHeader}
                    validMoveDestinations={props.validMoveDestinations}
                    targetId={props.targetId}
                    deactivateContext={() => deactivateContext()} 
                    onClose={() => setContextMenuActive(false)}/>}
            />
        </div>
    );
}

export default ContextClickHandler;