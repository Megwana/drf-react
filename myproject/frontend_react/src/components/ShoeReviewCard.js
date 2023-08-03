import React from 'react';
import { shoe } from "../shoeData";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ShoeReviewCard({shoe}) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={shoe.image} />
          <Card.Body>
            <Card.Title>{shoe.name}</Card.Title>
            <Card.Text>
              {shoe.review}
            </Card.Text>
            <Button variant="primary">Go to Review</Button>
          </Card.Body>
        </Card>
      </div>
    );
}

export default ShoeReviewCard;
