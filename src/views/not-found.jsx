/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

function NotFound() {
  return (
    <div className="NotFound">
      <div className="container">
        <h2>Not Found</h2>
        <p>
          <span>Page not found.. Tried the</span>
          <a href="/"> /</a>
          <span> ?</span>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
