import React from "react"
import { AppIUContext } from "../../pages/js/AppIUContext"
import './../css/TodoCounter.css'
function TodoCounter(props){
    const {
        listTodoList,
        search
      } = React.useContext(AppIUContext)

    return (<>
        <div className="bg-info text-white TodoCounter__extend_header">
                <h1 className="text-center">
                👍 Has completado {
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
                            ) &&  item.completed == true 
                        )).length
                } de {listTodoList.length}
            </h1>
        </div>
    </>)
}


export { TodoCounter }