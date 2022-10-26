import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';


const Courses = () => {
    const courses=useLoaderData();
    const { title, img, about, course_duration}=courses;

    return (
        <Card>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {about}
        </Card.Text>
        <p>Course Duration: {course_duration}</p>
        <Link to='/'><Button variant="primary">Go Home</Button></Link>
      </Card.Body>
    </Card>
    );
};

export default Courses;