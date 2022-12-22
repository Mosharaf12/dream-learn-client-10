import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = () => {
    const [categories, setCategories]=useState([])

    useEffect(()=>{
        fetch(`https://dream-learn.vercel.app/categories`)
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div className=''>
            <h6 className='text-white rounded-3 text-center fw-bold text my-3 bg-primary p-2 '>TOTAL CATEGORIES : {categories.length}</h6>
            {
                categories.map(category=> <p key={category.id}
                
                > <Link className='sideLink btn btn-outline-primary' to={`/course/${category.id}`}>{category.title}</Link> </p> )
            }
           
        </div>
    );
};

export default LeftSideNav;