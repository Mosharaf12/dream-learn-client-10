import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';


const Courses = () => {
    const courses=useLoaderData();
    const {_id, title, img, about, course_duration}=courses;

    return (
        <Card>
      <Card.Img variant="top" src={img} style={{height:'300px',}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {about}
        </Card.Text>
        <h4>Course Duration: {course_duration}</h4>
        <Link className='me-3' to={`/checkout/${_id}`}><Button variant="warning">Get Premium</Button></Link>
        <Link to='/'><Button variant="primary">Go Home</Button></Link>
      </Card.Body>
    </Card>
    );
};

export default Courses;