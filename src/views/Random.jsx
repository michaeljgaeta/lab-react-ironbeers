import React from 'react';
import { Link } from 'react-router-dom'

export default function Random() {
  return (
    <div>
      <>
        <Link to="/">
          <img src="./images/header.png" alt=""></img>
        </Link>
      </>
      <h2>Random Beer</h2>
    </div>
  );
}
