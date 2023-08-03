import React from 'react';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import ShoeReviewCard from '../components/ShoeReviewCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Home() {
    const shoeData = [
        {
          name: "Shoe 1",
          review: "This is a great shoe...",
          image: "url-to-image-of-shoe-1"
        },
        {
          name: "Shoe 2",
          review: "I really liked this shoe...",
          image: "url-to-image-of-shoe-2"
        },
        {
            name: "Shoe 3",
            review: "I really liked this shoe...",
            image: "url-to-image-of-shoe-2"
          },
          {
            name: "Shoe 4",
            review: "I really liked this shoe...",
            image: "url-to-image-of-shoe-2"
          },
          {
            name: "Shoe 5",
            review: "I really liked this shoe...",
            image: "url-to-image-of-shoe-2"
          },{
            name: "Shoe 6",
            review: "I really liked this shoe...",
            image: "url-to-image-of-shoe-2"
          },
        // Add as many shoes as you want
      ];
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
