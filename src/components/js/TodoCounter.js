import React from "react"
import { AppIUContext } from "../../pages/js/AppIUContext"

function TodoCounter(props){
    const {
        listTodoList,
        search
      } = React.useContext(AppIUContext)

    return (<><h1>
        Has completado {
            listTodoList.filter( 
                (item) => 
                (
                    (
                        search == "" || 
                        (
                            (
                                typeof search == "string" && 
                                item.text.indexOf(search) > -1
                            )
                        ) 
                    )&&  item.completed == true 
                )).length
        } de {listTodoList.length}
    </h1></>)
}


export { TodoCounter }