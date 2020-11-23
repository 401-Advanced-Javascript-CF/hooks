import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Badge from 'react-bootstrap/Badge';

import './todo.scss';

function ToDo(props) {
  const [list, setList] = useState([]);

  function addItem(item) {
    item._id = Math.random();
    item.complete = false;
    setList({ list: [...list, item]});
  };

  function toggleComplete(id) {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      // eslint-disable-next-line
      let list = list.map(listItem => listItem._id === item._id ? item : listItem);
      this.setList({list});
    }

  };

  useEffect(() => {

    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];
    
    setList(list);
  }, [])

  // const styles = {
  //   backgroundColor: "#808080",
  //   width: "30%",
  //   marginTop: "10px"
  // }

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
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </div>
        </section>
      </>
    );
}

export default ToDo;
