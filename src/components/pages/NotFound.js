import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='text-center'>
      <h1>Not Found</h1>
      <p className='lead'>This page was not found</p>
      <Link to={'/'} className='btn btn-dark btn-sm my-1'>
        Home
      </Link>
    </div>
  );
};

export default NotFound;
