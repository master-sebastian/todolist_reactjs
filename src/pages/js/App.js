import React from 'react';
import  { AppIUContext } from './AppIUContext';

import { TodoCounter } from '../../components/js/TodoCounter';
import { TodoFormNewItem } from '../../components/js/TodoFormNewItem';
import { TodoItem } from '../../components/js/TodoItem';
import { TodoList } from '../../components/js/TodoList';
import { TodoSearch } from '../../components/js/TodoSearch';

import './../css/App.css';

function App() {
  
  const {
    displayNewItem,
    listTodoList
   } = React.useContext(AppIUContext)
  return (<>
    <div className='container'>
      <div className='row'>
        <div className='offset-2 col-8'>
          <TodoCounter />
          <TodoSearch /> 
          {
            (!displayNewItem)?<></>:<TodoFormNewItem/>
          }

          {
            !displayNewItem && <hr></hr>
          }
          <TodoList>
            {
              listTodoList.map((element) => {
                return (<TodoItem 
                          key={element.id} 
                          id={element.id} 
                          text={element.text} 
                          completed={element.completed}
                          insertRegister={element.insert_register}
                        />)
              })
            }
          </TodoList>
        </div>
      </div>
    </div>
  </>);
}

export default App;
