import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <div className='text-center'>
        <h1 style={{fontSize:'200px'}}>404</h1>
        <h2> Sorry, we could not find this page.</h2>
        <p> But dont worry, you can find plenty of other things on our homepage.</p>
        <Link to='/'> <button className='btn btn-primary'>Back to homepage</button> </Link>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;