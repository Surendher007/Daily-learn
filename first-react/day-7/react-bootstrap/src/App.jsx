import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
let {email,setEmail} = useState("")
let {password,setPassword} = useState("")

  return <>
 <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" onClick={handleClick}>Submit</Button>
    </Form>

    <div>
      <h1>Entering values</h1>
    </div>
  </>
}

export default App
