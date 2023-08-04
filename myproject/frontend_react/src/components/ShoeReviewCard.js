import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';

function ShoeReviewCard({ review }) {

  const [data, setData] = useState([]);  // Initializes an empty array for your data
  axios.get('http://localhost:8000/reviews/')
  .then(response => {
      console.log(response.data);  // Logs the data returned from the API
  })
  .catch(error => {
      console.log(error);  // Logs any errors
  });

    return (
        <div className="d-flex justify-content-center mt-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={review.shoe.image_url} />
                <Card.Body>
                    <Card.Title>{review.shoe.name}</Card.Title>
                    <Card.Text>
                        {review.comment}
                    </Card.Text>
                    <Button variant="primary">Go to Review</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ShoeReviewCard;
