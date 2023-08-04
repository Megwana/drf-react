import React from 'react';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import ShoeReviewCard from '../components/ShoeReviewCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Home() {
  const [shoeData, setShoeData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/shoes/')
        .then(response => {
            setShoeData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}, []);

    return (
        <div>
            <NavBar /> 
            <SearchBar />
            <Container fluid="md">
                <Row>
                    {shoeData.map((shoe, index) => (
                        <Col md={4} className="mb-4">
                            <ShoeReviewCard shoe={shoe} key={index} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Home;
