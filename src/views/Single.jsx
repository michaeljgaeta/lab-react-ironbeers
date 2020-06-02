import React from 'react';
import { Link } from 'react-router-dom';

export default function Single() {
  return (
    <div>
      <>
        <Link to="/">
          <img src="./images/header.png" alt=""></img>
        </Link>
      </>
      <h2>Single Beer</h2>
    </div>
  );
}
