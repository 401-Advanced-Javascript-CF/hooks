import React, { useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Badge from 'react-bootstrap/Badge';
import useAjax from '../ajax.js';

import './todo.scss';

function ToDo(props) {
  const [list, setList, get, post, put, deleteItem] = useAjax();

  function addItem(item) {
    console.log(item);
    post(item);
  };

  function toggleComplete(id) {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      put(item);
    }

  };

  function handleDelete(id){
    deleteItem(id);
  }
  
  // eslint-disable-next-line
  useEffect(() => get() , [])

    return (
      <>
        <header>
          <h2>
          <Badge variant="secondary">
          To Do List Manager ({list.filter(item => !item.complete).length})
          </Badge>
          </h2>
        </header>

        <section className="todo">

          <div>
            <TodoForm addItem={addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
              handleDelete={handleDelete}
            />
          </div>
        </section>
      </>
    );
}

export default ToDo;
