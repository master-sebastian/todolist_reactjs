import React from 'react';
import { TodoButton } from '../../components/js/TodoButton';
import { TodoCounter } from '../../components/js/TodoCounter';
import { TodoItem } from '../../components/js/TodoItem';
import { TodoList } from '../../components/js/TodoList';
import { TodoSearch } from '../../components/js/TodoSearch';
import { dataset_test } from '../../data/dataset_test'

import './../css/App.css';

function App() {

  const [ search, setSearch ] = React.useState("")
  const [ listTodoList, setListTodoList ] = React.useState(dataset_test)

  console.log(dataset_test)
  return (<>
    <TodoCounter 
      text="Has completado @number_items_completed@ de @number_items@"
      numberItemsCompleted="3"
      numberItems="10"
    />
    <TodoSearch/>
    <TodoList>
      {
        listTodoList.map((element, index) => {
          return (<TodoItem key={index} text={element.text}/>)
        })
      }
    </TodoList>
    <br></br>
    <TodoButton text="+"/>
  </>);
}

export default App;
