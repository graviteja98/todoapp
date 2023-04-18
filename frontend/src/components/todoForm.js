import React,{useState} from 'react'

import { API }from "../api"
import { useDispatch } from "react-redux"
import {allList} from '../redux/todo/todoActions'
import {Form, Button, Col, Row,Container} from 'react-bootstrap'
function TodoForm() {

  const [todo, setTodo] = useState('');
  const [date, setDate] = useState('');

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const dispatch = useDispatch()

  async function  addtodoHelper (e){
  e.preventDefault()
  let Body = {todo:e.target[0].value,when:e.target[1].value}
  await fetch('http://'+API+'/api/todo/add', {
      method: 'POST',
      body: JSON.stringify(Body),
      headers: {
  
        'Content-Type': 'application/json'
      }
  }).then(response => response.json()).then(result=>{ dispatch(allList());return result})
  .catch(error=>console.log(error))
  setTodo('');
  setDate(null)
  }


  return (
    <Container className=" rounded border borde-2 p-3 m-2 ">
    <div
      style={{
        position: 'relative',
        top: 0,
      
        zIndex: 1,
      }}
    >
      <Form onSubmit={addtodoHelper} className="bg-warning p-2">
        <Row className="g-2">
          <Col>
            <Form.Control
            required
              type="text"
              placeholder="Enter todo"
              value={todo}
              onChange={handleTodoChange}
              className="rounded-pill border-0 px-3 py-2"
            />
          </Col>
          <Col>
            <Form.Control
            required
              type="date"
              placeholder="Enter date"
              value={date}
              onChange={handleDateChange}
              className="rounded-pill border-0 px-3 py-2"
            />
          </Col>
          <Col xs="auto">
            <Button variant="danger" type="submit" className="rounded-pill px-3">
              Add Todo
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
    </Container>
  )
}

export default TodoForm