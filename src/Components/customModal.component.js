import {Col, Row, Table, Form, FormControl, Button,Card, Modal} from 'react-bootstrap';
import {useState} from 'react';

function CustomModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          {props.title}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.heading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              
              <Form>
                  <Row>
                  <Form.Control type="text" placeholder="Title"/>
                  </Row>
                  <Row>
                  <Form.Control type="file" />
                  </Row>
              </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function CustomModalComp(props){
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          {props.title}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.heading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              
             {props.body}

          </Modal.Body>
          <Modal.Footer>
           {props.footer}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export {CustomModalComp};
  
  export default CustomModal;