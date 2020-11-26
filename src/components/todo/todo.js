import React, { useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Badge from 'react-bootstrap/Badge';
import useAjax from '../ajax.js';


import './todo.scss';

function ToDo(props) {
  // const [list, setList] = useState([]);
  const [list, get] = useAjax();

  function addItem(item) {
    item._id = Math.random();
    item.complete = false;
    // setList([...list, item]);
  };

  function toggleComplete(id) {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      // eslint-disable-next-line
      let list = list.map(listItem => listItem._id === item._id ? item : listItem);
      // setList({list});
    }

  };
  
  // async function getStuff(){
  //   await get('http://172.22.23.139:5051/api/v1/todo');
  //   }
  // eslint-disable-next-line
  useEffect(() => get('http://172.22.23.139:5051/api/v1/todo') , [])
  
  console.log(list);
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
