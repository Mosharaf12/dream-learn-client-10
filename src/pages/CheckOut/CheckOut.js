import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CheckOut = () => {
    const checks = useLoaderData();
    const {img,title, about, course_duration}=checks;

    const handleCheck=()=>{
      alert('Hurray! Checkout successful!')
    }

    return (
        <Card className="text-center">
        <Card.Header>Grow your Knowledge</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={img} style={{width:'50%'}} />
          <Card.Text>
            {about}
            <br />
            <h4>Time: {course_duration}</h4>
          </Card.Text>
          <Button onClick={handleCheck} variant="primary">CheckOut</Button>
        </Card.Body>
      </Card>
    );
};

export default CheckOut;