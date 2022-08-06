import React from "react";
import { useLocalStorage } from "../../lib/Customs/useLocalStorage";
import { capitalizarPrimeraLetra, getDateSystem } from "../../lib/js/string_t";


const AppIUContext = React.createContext();


function AppIUContextProvider (props) {

    const [ id, setId ] = React.useState(0)
    const [ search, setSearch ] = React.useState("")
    const [ listTodoListOrginal, setListTodoListOrginal ] = React.useState([])
    const [ listTodoList, setListTodoList ] = React.useState([])
    const [ displayNewItem, setDisplayNewItem ] = React.useState(false)
    const [ text, setText ] = React.useState("")
    
    const { localStorageResource, updateLocalStorageResource } = useLocalStorage("data_v1_local",[])
    
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

    const updateFilter = (listTodoListOrginal, search_ = null) => {

        if(search_ === null){
            search_ = search
        }

        setListTodoListOrginal(listTodoListOrginal)

        setListTodoList(listTodoListOrginal.filter(
            item => 
                (
                    search_ == null || search_ == "" || (typeof search_ == "string" && item.text.indexOf(search_) > -1)
                )
            )
        )

        updateLocalStorageResource(listTodoListOrginal)
    }

    const onClickDeleteObject = (event, id) => {
        
        const listTodoListOrginal_ = listTodoListOrginal.filter(
            item => ( id != item.id )
        )

        updateFilter(listTodoListOrginal_)
        
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
        
          
        if(text != "" && text != null && text.split(" ").join("").split("\n").join("") != ""){
            listTodoListOrginal.unshift({
                id: id + 1, 
                text: capitalizarPrimeraLetra(text.trim()), 
                completed: false,
                insert_register: getDateSystem()
            })
            
            setId(id + 1)
            
            updateFilter(listTodoListOrginal, "")
            
            setSearch("")
            
            setText("")
            
            setDisplayNewItem(!displayNewItem)
        }else{
            alert("No puede agragar el nuevo item sin texto ❌")
        }
    }

    const state = {
        search,
        listTodoListOrginal,
        listTodoList,
        displayNewItem,
        id,
        text,
        localStorageResource,
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
        addElement,
        updateLocalStorageResource
    }

    return (<AppIUContext.Provider value={ state }>

        { props.children }
    
    </AppIUContext.Provider>)
}

export { AppIUContext, AppIUContextProvider }