import React from 'react';

function TodoList({list, handleComplete, handleDelete}) {
    console.log(list);
    return (
      <ul>
        {list.map(item => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => handleComplete(item._id)}>
              {item.text}
              <h5 onClick={() => handleDelete(item._id)}>X</h5>
            </span>
          </li>
        ))}
      </ul>
    );
}

export default TodoList;
