import React from 'react'

import { Form, Col, Button } from "react-bootstrap";

const Contact = () => {
    return (
        <div>
            <h1 className='text-center'>Contact</h1>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                            <option>Outside Nigeria</option>
                            <option>ABUJA FCT</option>
                            <option>ABIA</option>
                            <option>ADAMAWA</option>
                            <option>AKWA IBOM</option>
                            <option>ANAMBRA</option>
                            <option>BAUCHI</option>
                            <option>BAYELSA</option>
                            <option>BENUE</option>
                            <option>BORNO</option>
                            <option>CROSS RIVER</option>
                            <option>DELTA</option>
                            <option>EBONYI</option>
                            <option>EDO</option>
                            <option>EKITI</option>
                            <option>ENUGU</option>
                            <option>GOMBE</option>
                            <option>IMO</option>
                            <option>JIGAWA</option>
                            <option>KADUNA</option>
                            <option>KANO</option>
                            <option>KATSINA</option>
                            <option>KEBBI</option>
                            <option>KOGI</option>
                            <option>KWARA</option>
                            <option>LAGOS</option>
                            <option>NASSARAWA</option>
                            <option>NIGER</option>
                            <option>OGUN</option>
                            <option>ONDO</option>
                            <option>OSUN</option>
                            <option>OYO</option>
                            <option>PLATEAU</option>
                            <option>RIVERS</option>
                            <option>SOKOTO</option>
                            <option>TARABA</option>
                            <option>YOBE</option>
                            <option>ZAMFARA</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default Contact;