import React from 'react';
import { AppIUContext } from './AppIUContext';
import { TodoButton } from '../../components/js/TodoButton';
import { TodoCounter } from '../../components/js/TodoCounter';
import { TodoFormNewItem } from '../../components/js/TodoFormNewItem';
import { TodoItem } from '../../components/js/TodoItem';
import { TodoList } from '../../components/js/TodoList';
import { TodoSearch } from '../../components/js/TodoSearch';

import './../css/App.css';

function App() {
  /*
  const {
    //displayNewItem,
    //changeDisplayNewItem,
    //listTodoList
  }*/
  let {o} = React.useContext(AppIUContext)
  console.log(AppIUContext)
  return (<>
  {
    /*
    <TodoCounter />
    <TodoSearch />
    <TodoButton text="+" onClick={ changeDisplayNewItem }/>
    
    {
      (!displayNewItem)?<></>:<TodoFormNewItem/>
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
                  />)
        })
      }
    </TodoList>
    */}
  </>);
}

export default App;
