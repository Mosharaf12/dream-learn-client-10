import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetail from '../CourseDetail/CourseDetail';


const Home = () => {
    const allCourses = useLoaderData();

    return (
   <div className='container'>
        <div className='row g-3'>
        {
        allCourses.map(course=> <CourseDetail
        key={course._id}
        course={course}
        ></CourseDetail>)
    }
        </div>
   </div>
    );
};

export default Home;