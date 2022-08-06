import React from "react"
import { AppIUContext } from "../../pages/js/AppIUContext"
import './../css/TodoItem.css'
function TodoItem(props){
    const {
        onChangeEventCheck,
        onClickDeleteObject
      } = React.useContext(AppIUContext)

    const [ check, setCheck ] = React.useState(props.completed)
    const [ id, setId ] = React.useState(props.id)
    
    const completed = {whiteSpace: "pre-wrap"}

    if(check){
        completed.textDecoration =  "line-through"
    }
    return (<>
        <div className="row">
            <div className="col-1 mb-3">
                <input type="checkbox" checked={check} onChange={(event) => { onChangeEventCheck(event, id, setCheck) } }/>
            </div>
            <div className="col-6 mb-3 TodoItem__extend">
                <p style={completed}>{props.text}</p>
            </div>
            <div className="col-2 mb-3 TodoItem__extend">
                <p style={completed}>{props.insertRegister}</p>
            </div>
            <div className="col-1 mb-3 text-center">
                <button type="button" onClick={ (event) => { onClickDeleteObject(event, id) } } className="btn btn-danger" >X</button>
            </div>
        </div>
        <hr></hr>
    </>)   
}


export { TodoItem }