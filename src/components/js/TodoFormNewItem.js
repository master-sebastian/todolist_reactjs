import React from "react"
import { AppIUContext } from "../../pages/js/AppIUContext"
import { TodoButton } from "./TodoButton"

function TodoFormNewItem(props){
    const {
        onChangeTextItem,
        addElement,
        text
      } = React.useContext(AppIUContext)
    return (<>
        <input type="text" value={ text } onChange={ onChangeTextItem }/>
        <TodoButton onClick={ addElement } text="Agregar"/>
    </>)   
}


export { TodoFormNewItem }