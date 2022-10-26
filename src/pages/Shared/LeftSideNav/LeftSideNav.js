import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/categories`)
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div>
            <p>Total categories: {categories.length}</p>
            {
                categories.map(category=> <p key={category.id}
                
                > <Link to={`/courses/${category.id}`}>{category.title}</Link> </p> )
            }
           
        </div>
    );
};

export default LeftSideNav;