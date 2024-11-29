import {Form, Button, Row, Col} from 'react-bootstrap'

//form con submit, dovrei fare prevent default se fosse funzionante

const MySettings = function(){
    return (<>
<Row>
    <Col><Form className="py-5 Sage d-flex flex-column align-items-center ">
<Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label><Form.Check type="checkbox" label="Keep track of what I see" /></Form.Label>
        
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label><Form.Check type="checkbox" label="Abilitate all extensions" /></Form.Label>
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label><Form.Check type="checkbox" label="Link Social Media Account" /></Form.Label>
        </Form.Group>
       
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label><Form.Check type="checkbox" label="Let Neflix Steal your Data 🤑" /></Form.Label>
        </Form.Group>

      <Form.Group className="mb-3 w-25 justify-self-center" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="success" type="submit"> 
        Let's mix it up!
      </Button>
    </Form>
    </Col>
    </Row>
    
    </>
    )
}

export default MySettings