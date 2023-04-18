import React from 'react';
import { Link } from 'react-router-dom'

const ErrorPage = ({ errorCode, errorMessage }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="display-1">{errorCode}</h1>
          <h1 className="display-4">{errorMessage}</h1>
          <button className='btn btn-danger'><Link to="/" className='text-decoration-none text-white'>Home</Link></button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
