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
import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } }

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  console.log(user);
  const logHandler = () => {
    logOut()
      .then(() => {

      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <Navbar collapseOnSelect expand="lg" className='navbar-css'>
      <Container>
        <Link to='/' className='title'>
          <Navbar.Brand className='d-flex align-items-center'>


            <img
              src={logo}
              height="45px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h5>DREAM-LEARN</h5>

          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <div>
              <Link className='itemList text-white fw-semibold' to='/'>Courses</Link>
              <Link className='itemList text-white fw-semibold' to='/faq'>FAQ</Link>
              <Link className='itemList text-white fw-semibold' to='/blog'>Blog</Link>
              <Switch {...label} defaultChecked />
            </div>

          </Nav>
          <Nav className='d-flex align-items-center'>
            <Nav.Link>
              {
                user?.uid ?
                  <>
                    <span> {user?.displayName}</span>
                    <button className='btn btn-primary mx-2' onClick={logHandler}>Log Out</button>
                  </>
                  :
                  <>
                    <Link className='btn btn-warning me-2' to='/login'>Login</Link>
                    <Link className='btn btn-primary' to='/register'>Register</Link>
                  </>
              }

            </Nav.Link>
            <Link to='/profile'>
              {
                user?.photoURL ?

                  <Image

                    style={{ height: '30px' }} roundedCircle
                    src={user.photoURL}
                    title={user.displayName}

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