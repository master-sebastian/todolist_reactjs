function TodoSearch(props){

    const onChangeEventSearch = (event) => {
        const search = event.target.value
        props.parentComponent.setSearch(event.target.value)
        props.parentComponent.setListTodoList(props.parentComponent.listTodoListOrginal.filter(
            item => 
                (
                    search == null || search == "" || (typeof search == "string" && item.text.indexOf(search) > -1)
                )
            )
        )
    }

    return (<>
        <input type="text" value={props.search} onChange={ onChangeEventSearch }/>
    </>)   
}


export { TodoSearch }