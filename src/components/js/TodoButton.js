function TodoButton(props){
    return (<>
        <button onClick={ props.onClick}>{props.text}</button>
    </>)   
}


export { TodoButton }