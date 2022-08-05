import React from "react";


const AppIUContext = React.createContext()


function AppIUContextProvider (props) {

    const [ id, setId ] = React.useState(0)
    const [ search, setSearch ] = React.useState("")
    const [ listTodoListOrginal, setListTodoListOrginal ] = React.useState([])
    const [ listTodoList, setListTodoList ] = React.useState([])
    const [ displayNewItem, setDisplayNewItem ] = React.useState(false)
    const [ text, setText ] = React.useState("")
/*
    const changeDisplayNewItem = () => {
        setDisplayNewItem(!displayNewItem)
    }

    const onChangeEventSearch = (event) => {
        const _search = event.target.value
        setSearch(event.target.value)
        setListTodoList(listTodoListOrginal.filter(
            item => 
                (
                    _search == null || _search == "" || (typeof _search == "string" && item.text.indexOf(_search) > -1)
                )
            )
        )
    }

    const updateFilter = (listTodoListOrginal) => {

        setListTodoListOrginal(listTodoListOrginal)

        setListTodoList(listTodoListOrginal.filter(
            item => 
                (
                    search == null || search == "" || (typeof search == "string" && item.text.indexOf(search) > -1)
                )
            )
        )
    }

    const onClickDeleteObject = (event, id) => {
        
        const listTodoListOrginal = listTodoListOrginal.filter(
            item => ( id != item.id )
        )

        updateFilter(listTodoListOrginal)
        
    }

    const onChangeEventCheck = (event, id, setCheck) => {
        
        const change = event.target.checked

        for (let index = 0; index < listTodoListOrginal.length; index++) {
            if(id === listTodoListOrginal[index].id){
                listTodoListOrginal[index].completed = change;
                setCheck(change)
            }            
        }

        updateFilter(listTodoListOrginal)

    }

    const onChangeTextItem = (event) => {
        const newText = event.target.value
        setText(newText)
    }

    const addElement = (event) => {
        
        listTodoListOrginal.unshift({
            id: id + 1, 
            text, 
            completed: false 
        })
        
        setId(id + 1)
        
        updateFilter(listTodoListOrginal)
        
        setText("")

        setDisplayNewItem(!displayNewItem)
    }
*/
    const state = {
        search,
        listTodoListOrginal,
        listTodoList,
        displayNewItem,
        id,
        text/*,
        setText,
        setSearch,
        setListTodoListOrginal,
        setListTodoList,
        setDisplayNewItem,
        setId,
        changeDisplayNewItem,
        onChangeEventSearch,
        onClickDeleteObject,
        onChangeEventCheck,
        onChangeTextItem,
        addElement*/
    }

    return (<AppIUContext.Provider value={ {o:12} }>

        { props.children }
    
    </AppIUContext.Provider>)
}

export { AppIUContext }