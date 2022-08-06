import React from "react"
import { AppIUContext } from "../../pages/js/AppIUContext"
import { TodoButton } from "./TodoButton"
import './../css/TodoFormNewItem.css'
function TodoFormNewItem(props){
    const {
        onChangeTextItem,
        addElement,
        text,
        changeDisplayNewItem
      } = React.useContext(AppIUContext)
    return (<>
        <div className="TodoFormNewItem__Background">
            <div className="text-center text-white bg-violet TodoFormNewItem__extend_header">
                <h3>
                    + Nuevo item
                </h3>
            </div>
            <div className="row">
                <div className="col-9 mb-3 TodoFormNewItem__extend_textarea">
                    <textarea name="textarea" value={ text } rows="10" className="form-control" onChange={ onChangeTextItem }></textarea>
                </div>
                <div className="col-2 mb-3 text-center">
                    <TodoButton onClick={ addElement } text="+ Agregar" classNameButton="btn btn-primary"/>
                    <hr></hr>
                    <TodoButton onClick={ changeDisplayNewItem } text="X Cerrar" classNameButton="btn btn-danger"/>
                </div>
            </div>
        </div>
    </>)   
}


export { TodoFormNewItem }