import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseDetail = ({course}) => {
    const {_id, title, img, about,}= course;
    return (
       <div className='col-md-4'>
        <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {about.length > 150? about.slice(0,150) + "...." : about}
        </Card.Text>
        <Link to={`/course/${_id}`}><Button variant="primary">Courses Details</Button></Link>
      </Card.Body>
    </Card>
       
       </div>
    );
};

export default CourseDetail;