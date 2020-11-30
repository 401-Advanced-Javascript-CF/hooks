import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../ajax.js'

import './todo.scss';

function ToDo() {

  const [list, setList, get, post, put] = useAjax();

  function _addItem(item) {
    console.log(item);
    post(item);
  };

  function _toggleComplete(id) {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      put(item);
  };

  function _getTodoItems() {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => setList(data.results))
      .catch(console.error);
  };

  useEffect(_getTodoItems, []);

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm addItem={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
          />
        </div>
      </section>
    </>
  );
};
}
export default ToDo;
