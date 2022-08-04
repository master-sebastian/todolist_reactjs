import { useState } from "react"
import { TodoButton } from "./TodoButton"

function TodoFormNewItem(props){
    
    const [ text, setText ] = useState("")
    
    const addElement = (event) => {
        
        props.parentComponent.listTodoListOrginal.unshift({
            id: props.parentComponent.id + 1, 
            text, 
            completed: false 
        })
        
        props.parentComponent.setId(props.parentComponent.id + 1)
        
        const listTodoListOrginal = props.parentComponent.listTodoListOrginal

        props.parentComponent.setListTodoListOrginal(listTodoListOrginal)

        props.parentComponent.setListTodoList(listTodoListOrginal.filter(
            item => 
                (
                    props.parentComponent.search == null || props.parentComponent.search == "" || (typeof props.parentComponent.search == "string" && item.text.indexOf(props.parentComponent.search) > -1)
                )
            )
        )
        
        setText("")

        props.parentComponent.setDisplayNewItem(!props.parentComponent.displayNewItem)
    }
    
    const onChangeEventSearch = (event) => {
        const newText = event.target.value
        setText(newText)
    }

    return (<>
        <input type="text" value={ text } onChange={ onChangeEventSearch }/>
        <TodoButton onClick={ addElement } text="Agregar"/>
    </>)   
}


export { TodoFormNewItem }