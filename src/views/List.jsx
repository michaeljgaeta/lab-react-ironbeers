import React from 'react';
import { Link } from 'react-router-dom';

export default function List() {
  return (
    <div>
      <>
        <Link to="/">
          <img src="./images/header.png" alt=""></img>
        </Link>
      </>
      <h2>All Beers</h2>
    </div>
  );
}
