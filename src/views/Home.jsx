import React from 'react';
import { Link } from 'react-router-dom';

export default function List() {
  return (
    <div>
      <>
        <img src="./images/all-beers.png" alt=""></img>
        <Link to="/list">
          <h2>All Beers</h2>
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis culpa
          repudiandae dicta, a iste quas dignissimos amet esse labore quasi
          vitae nihil facilis dolor totam, quam aliquid illum veritatis debitis!
        </p>
      </>
      <>
        <img src="./images/random-beers.png" alt=""></img>
        <Link to="/random">
          <h2>Random Beer</h2>
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis culpa
          repudiandae dicta, a iste quas dignissimos amet esse labore quasi
          vitae nihil facilis dolor totam, quam aliquid illum veritatis debitis!
        </p>
      </>
      <>
        <img src="./images/new-beer.png" alt=""></img>
        <Link to="/single">
          <h2>New Beer</h2>
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis culpa
          repudiandae dicta, a iste quas dignissimos amet esse labore quasi
          vitae nihil facilis dolor totam, quam aliquid illum veritatis debitis!
        </p>
      </>
    </div>
  );
}
