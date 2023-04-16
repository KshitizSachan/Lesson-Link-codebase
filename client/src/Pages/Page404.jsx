import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Page404.css'

function Page404() {
  return (
    <div className="page-404">
    <h1 className="error-message">Whoops!</h1>
      <h3 className="error-message">404 Error: Page Not Found</h3>
      <Link to="/" className="home-link">
        <button className="home-button">Go to Home Page</button>
      </Link>
      <h1 className="error-message">Looks like this page went on Vacation</h1>
    </div>
  );
}

export default Page404;
