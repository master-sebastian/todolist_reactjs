import React from "react"
import { AppIUContext } from "../../pages/js/AppIUContext"

function TodoSearch(props){
    const {
        search,
        onChangeEventSearch
      } = React.useContext(AppIUContext)

    

    return (<>
        <input type="text" value={search} onChange={ onChangeEventSearch }/>
    </>)   
}


export { TodoSearch }