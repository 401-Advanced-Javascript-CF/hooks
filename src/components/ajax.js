import {useState} from 'react';
import axios from 'axios';

function useAjax(){
const [list, setList] = useState([]);

function get(){
    let array = [];
    axios.get('http://localhost:5051/api/v1/todo')
    .then(response => {
      for(let ele of response.data){
        array.push({_id: ele._id, text: ele.todoitem, difficulty: ele.difficulty, assignee: ele.assigned, complete: ele.complete})
      }
      setList(array);
    });
}

function post(post){
  !post.difficulty ? post.difficulty = 1 : post.difficulty = post.difficulty;
  axios.post('http://localhost:5051/api/v1/todo', {
    todoitem: post.text,
    difficulty: post.difficulty,
    assigned: post.assignee,
    complete: false 
  })
  .then(response => {
    get();
  })
}

function put(item){
  axios.put(`http://localhost:5051/api/v1/todo/${item._id}`, {
    complete: item.complete
  })
  .then(res => {
    get();
    // setList([...list, {text: res.data.todoitem, difficulty: res.data.difficulty, assignee: res.data.assigned, complete: res.data.complete, _id: res.data._id}])
  })
}

function deleteItem(id){
  axios.delete(`http://localhost:5051/api/v1/todo/${id}`)
  .then(res => {
    console.log(res.data)
  })
}

return [
  list,
  setList,
  get,
  post,
  put,
  deleteItem
]

}

export default useAjax;