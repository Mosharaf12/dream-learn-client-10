import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/logo.png'
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    console.log(user);
    const logHandler=()=>{
        logOut()
        .then(()=>{

        })
        .catch((error)=>{
            console.error(error);
        })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Link to='/'>
          <Navbar.Brand className='d-flex align-items-center'>
            
            
            <img
              src={logo}
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h5>DREAM-LEARN</h5>
        
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <div>
                <Link className='itemList' to='/'>Courses</Link>
                <Link className='itemList' to='/faq'>FAQ</Link>
                <Link className='itemList' to='/blog'>Blog</Link>
              </div>
              
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets
                      { 
                            user?.uid ?
                            <>
                            <span> {user?.displayName}</span>
                            <button onClick={logHandler}>Log Out</button>
                            </>
                            :
                            <>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                            </>
                           }

              </Nav.Link>
              <Link to='/profile'>
                            {
                                user?.photoURL ?
                            
                                <Image

                                        style ={{height: '30px'}} roundedCircle 
                                        src={user.photoURL}
                                    
                                    ></Image>
                                : <FaUser></FaUser>

                            }

                        </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;