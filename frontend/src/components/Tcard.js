import { useState } from 'react';
import { Card, Button, Modal, Form,Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteIt,updateIt} from '../redux/todo/todoActions';
function TCard({ _id,todo, when }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);
  const [editedDate, setEditedDate] = useState(when);
const dateObj =  new Date(when)
const dispatch = useDispatch()
  const handleEdit = () => {
    setShowEditModal(true);
  };
  const handleDelete = () => {
    setDeleteModal(true);
  };


  const handleEditSubmit = (e) => {
    e.preventDefault();
    setShowEditModal(false);
    console.log(editedDate,editedTodo)
   dispatch(updateIt(_id,{todo:editedTodo,when:editedDate}))
  };
  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    console.log(_id)
   dispatch(deleteIt(_id));
  };

  const handleEditCancel = () => {
    setEditedTodo(todo);
    setEditedDate(when);
    setShowEditModal(false);
  };
  const handleDeleteCancel = () => {
    setDeleteModal(false);
  };
  return (
    <>
      <Card
        className="mb-3"
        style={{ width: '18rem' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0px 0px 10px #ccc';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '';
        }}
      >
        <Card.Body className='border border-dark border-3 rounded'>
          <Card.Title >{todo}</Card.Title>
          <h3><Badge className='bg-success'>{dateObj.toDateString()}</Badge></h3>
          {/*<Card.Text>{_id}</Card.Text>*/}
          <br/>
          <Button variant="primary" className='border border-dark border-2 m-1 rounded' onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="danger" className='border border-dark border-2 m-1 rounded' onClick={handleDelete}>
          Delete
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showEditModal} onHide={handleEditCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Todo</Form.Label>
              <Form.Control
                type="text"
                value={editedTodo}
                onChange={(e) => setEditedTodo(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={editedDate}
                onChange={(e) => setEditedDate(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleEditCancel}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="ms-2">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>


      <Modal show={showDeleteModal} onHide={handleDeleteCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Delete?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleDeleteSubmit}>
            <Button variant="secondary" onClick={handleDeleteCancel}>
              No
            </Button>
            <Button variant="primary" type="submit" className="ms-2">
             Yes, Delete 
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}



export default TCard;
