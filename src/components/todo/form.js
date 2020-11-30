import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoForm(props) {
  const [item, setItem] = useState({});
  console.log(item);
  function handleInputChange(e) {
    setItem({...item, [e.target.name]: e.target.value});
  };

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    console.log(props)
    props.addItem(item);
    setItem({});
  };

    return (
      <>
        <h3>Add Item</h3>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control name='text' type="text" placeholder="Add To Do List Item" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Difficult Rating</Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Group>
          <Button variant="primary" as="input" type="submit" value="Submit" />
        </Form>
      </>
    );
}

export default TodoForm;
