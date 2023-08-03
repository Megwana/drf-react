import React from 'react';
import NavBar from '../components/NavBar';
import { useState } from 'react'; // useState is added to the import
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`Logging in with username: ${username} and password: ${password}`);
        // Call your API to login here
    };

    return (
        <>
            <NavBar />
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter username" 
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LoginPage;
