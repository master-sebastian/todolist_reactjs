function TodoCounter(props){
    return (<><h1>
        Has completado {
            props.parentComponent.listTodoList.filter( 
                (item) => 
                (
                    (
                        props.parentComponent.search == "" || 
                        (
                            (
                                typeof props.parentComponent.search == "string" && 
                                item.text.indexOf(props.parentComponent.search) > -1
                            )
                        ) 
                    )&&  item.completed == true 
                )).length
        } de {props.parentComponent.listTodoList.length}
    </h1></>)
}


export { TodoCounter }