import React from "react"
import { AppIUContext } from "../../pages/js/AppIUContext"

function TodoItem(props){
    const {
        onChangeEventCheck,
        onClickDeleteObject
      } = React.useContext(AppIUContext)

    const [ check, setCheck ] = React.useState(props.completed)
    const [ id, setId ] = React.useState(props.id)

    return (<>
        <input type="checkbox" checked={check} onChange={(event) => { onChangeEventCheck(event, id, setCheck) } }/>
        <h3>{props.text}</h3>
        <button type="button" onClick={ (event) => { onClickDeleteObject(event, id) } }>X</button>
    </>)   
}


export { TodoItem }