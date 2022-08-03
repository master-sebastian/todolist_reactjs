function TodoSearch(props){

    const onChangeEventSearch = (event) => {
        props.setSearchObj(event.target.value)
    }

    return (<>
        <input type="text" value={props.search} onChange={ onChangeEventSearch }/>
    </>)   
}


export { TodoSearch }