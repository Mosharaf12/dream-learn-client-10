import React from 'react';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='p-5 mt-5 footer'>
            <div className='p-5'>
                <h4 className='text-white text-center'>©Copyright 2022 || All rights Reserved by <span className='text-dark'>Mosharaf Hossain</span> </h4>
               <div className='d-flex text-center justify-content-center'>
               <h3 className='text-light  mx-2'><FaFacebook></FaFacebook></h3>
                <h3 className='text-light mx-2'><FaTwitter></FaTwitter></h3>
                <h3 className='text-light mx-2'><FaGithub></FaGithub></h3>
               </div>
            </div>

        </div>
    );
};

export default Footer;