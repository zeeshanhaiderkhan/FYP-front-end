import React from 'react';
import {Col, Row, Table, Form, FormControl, Button, } from 'react-bootstrap';
import {FcPlus} from 'react-icons/fc'
import IconCustom from './IconCustom.component';

function TableWrapper(props){
    //props.head=[], props.data=[]
    return(

        <Table striped bordered hover>
            <thead>
                <tr>
                    {
                        props.head.map((head)=>
                            <th>{head}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((data)=>
                        <tr>
                          { data.map((tdata)=>
                            <td>{tdata}</td>
                           )
                        }
                        </tr>
                    )
                }
            </tbody>
        </Table>

    );
}

function TableOptions(){
    return(<div class="container">
        <Row>
            
            <Col md={3} className="justify-content-center">
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form></Col>

        <Col>
        <Row className="float-end">
        <Button ><IconCustom icon={<FcPlus/>} size="3em" /></Button> 
        </Row>
        </Col>
      </Row>
    </div>);
}

function TableOptionsCustom(props){
    return(<div class="container">
        <Row>
            
            <Col md={3} className="justify-content-center">
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form></Col>

        <Col>
        <Row className="float-end">
        {props.button} 
        </Row>
        </Col>
      </Row>
    </div>);
}

export { TableOptions,TableWrapper, TableOptionsCustom};


