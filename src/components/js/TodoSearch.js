import React from "react"
import { AppIUContext } from "../../pages/js/AppIUContext"
import { TodoButton } from '../js/TodoButton';
import './../css/TodoSearch.css'
function TodoSearch(props){
    const {
        search,
        onChangeEventSearch,
        changeDisplayNewItem
      } = React.useContext(AppIUContext)


    return (<>
        <div className="row">
            <div className="col-1 mb-3 text-center TodoSearch__config_text_search">
                <label className="form-label col-form-label"> <h4>Buscar</h4></label>
            </div>
            <div className="col-7 TodoSearch__config_text_input_search">
                <input type="text" value={search}  className="form-control" onChange={ onChangeEventSearch }/>
            </div>
            <div className="col-3 text-center">
                <TodoButton text="+ Nuevo item" onClick={ changeDisplayNewItem } classNameButton="btn btn-primary"/>
            </div>
        </div>
    </>)   
}


export { TodoSearch }