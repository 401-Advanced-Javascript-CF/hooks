import {useState} from 'react';
import axios from 'axios';

function useAjax(){
const [list, setList] = useState([]);

function get(http){
    let array = [];
    axios.get('http://localhost:5051/api/v1/todo')
    .then(response => {
      for(let ele of response.data){
        array.push({_id: ele._id, text: ele.todoitem, difficulty: ele.difficulty, assignee: ele.assigned, complete: ele.complete})
      }
      setList(array);
    });
}

return [
  list,
  get
]

}

export default useAjax;