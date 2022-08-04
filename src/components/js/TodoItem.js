import React from "react"

function TodoItem(props){

    const [ check, setCheck ] = React.useState(props.completed)
    const [ id, setId ] = React.useState(props.id)

    const onClickDeleteObject = (event) => {
        
        const listTodoListOrginal = props.parentComponent.listTodoListOrginal.filter(
            item => ( id != item.id )
        )
        props.parentComponent.setListTodoListOrginal(listTodoListOrginal)

        props.parentComponent.setListTodoList(listTodoListOrginal.filter(
            item => 
                (
                    props.parentComponent.search == null || props.parentComponent.search == "" || (typeof props.parentComponent.search == "string" && item.text.indexOf(props.parentComponent.search) > -1)
                )
            )
        )
    }

    const onChangeEvent = (event) => {
        const change = event.target.checked
        const search = props.parentComponent.search
        for (let index = 0; index < props.parentComponent.listTodoListOrginal.length; index++) {
            if(id === props.parentComponent.listTodoListOrginal[index].id){
                props.parentComponent.listTodoListOrginal[index].completed = change;
                setCheck(change)
            }            
        }
        props.parentComponent.setListTodoListOrginal(props.parentComponent.listTodoListOrginal)
        props.parentComponent.setListTodoList(props.parentComponent.listTodoListOrginal.filter(
            item => 
                (
                    search == null || search == "" || (typeof search == "string" && item.text.indexOf(search) > -1)
                )
            )
        )
    }

    return (<>
        <input type="checkbox" checked={check} onChange={onChangeEvent}/>
        <h3>{props.text}</h3>
        <button type="button" onClick={ onClickDeleteObject }>X</button>
    </>)   
}


export { TodoItem }