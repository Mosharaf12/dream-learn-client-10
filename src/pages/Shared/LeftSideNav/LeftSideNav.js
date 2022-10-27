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
            <p className='text-info fw-bold my-3'>Total Categories: {categories.length}</p>
            {
                categories.map(category=> <p key={category.id}
                
                > <Link className='sideLink btn btn-outline-primary' to={`/course/${category.id}`}>{category.title}</Link> </p> )
            }
           
        </div>
    );
};

export default LeftSideNav;