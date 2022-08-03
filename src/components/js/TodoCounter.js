function TodoCounter(props){
    return (<><h1>
        {
            props.text.replace(
                "@number_items_completed@", 
                props.numberItemsCompleted
            ).replace(
                "@number_items@", 
                props.numberItems
            ) 
        }
    </h1></>)
}


export { TodoCounter }