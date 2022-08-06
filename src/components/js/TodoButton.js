import React from "react"

function TodoButton(props){
    return (<>
        <button onClick={ props.onClick} className={props.classNameButton}>{props.text}</button>
    </>)   
}


export { TodoButton }