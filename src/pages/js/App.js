import React from 'react';
import { TodoButton } from '../../components/js/TodoButton';
import { TodoCounter } from '../../components/js/TodoCounter';
import { TodoItem } from '../../components/js/TodoItem';
import { TodoList } from '../../components/js/TodoList';
import { TodoSearch } from '../../components/js/TodoSearch';

import './../css/App.css';

function App() {
  return (<React.Fragment>
    <TodoCounter/>
    <TodoSearch/>
    <TodoList>
      <TodoItem/>
    </TodoList>
    <TodoButton/>
  </React.Fragment>);
}

export default App;
