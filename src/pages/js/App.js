import React from 'react';
import { TodoButton } from '../../components/js/TodoButton';
import { TodoCounter } from '../../components/js/TodoCounter';
import { TodoFormNewItem } from '../../components/js/TodoFormNewItem';
import { TodoItem } from '../../components/js/TodoItem';
import { TodoList } from '../../components/js/TodoList';
import { TodoSearch } from '../../components/js/TodoSearch';

import './../css/App.css';

function App() {

  const [ id, setId ] = React.useState(4)
  const [ search, setSearch ] = React.useState("")
  const [ listTodoListOrginal, setListTodoListOrginal ] = React.useState([])
  const [ listTodoList, setListTodoList ] = React.useState([])
  const [ displayNewItem, setDisplayNewItem ] = React.useState(false)

  const state = {
    search: search,
    setSearch: setSearch,
    listTodoListOrginal: listTodoListOrginal,
    setListTodoListOrginal : setListTodoListOrginal,
    listTodoList: listTodoList,
    setListTodoList: setListTodoList,
    displayNewItem: displayNewItem,
    setDisplayNewItem: setDisplayNewItem,
    id: id,
    setId: setId
  }
  
  return (<>
    <TodoCounter 
      text="Has completado @number_items_completed@ de @number_items@"
      parentComponent={ state }
    />
    <TodoSearch 
      parentComponent={ state }
    />
    <TodoButton text="+" onClick={ ()=> {
      setDisplayNewItem(!displayNewItem)
    }}/>
    
    {
      (!displayNewItem)?<></>:<TodoFormNewItem parentComponent={ state }/>
    }
    <br></br>
    <TodoList>
      {
        listTodoList.map((element) => {
          return (<TodoItem 
                    key={element.id} 
                    id={element.id} 
                    text={element.text} 
                    completed={element.completed}
                    parentComponent={ state }
                  />)
        })
      }
    </TodoList>
    
    <></>
  </>);
}

export default App;
