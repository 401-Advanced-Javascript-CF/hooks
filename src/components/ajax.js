import axios from 'axios';

function ajax(){

function get(http){
    let obj = {};
    axios.get(http)
    .then(response => {
      // setList(response.data);
      for(let ele of response.data){
        obj.text = ele.todoitem;
        obj.difficulty = ele.difficulty;
        obj.assignee = ele.assigned;
        obj.complete = ele.complete;
      }
      
    })
    return obj;
}

return [
    get
]

}

export default ajax;