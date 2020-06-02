import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Single from './../views/Single';

import * as beerService from './../services/beerApi';

export class List extends Component {
  constructor() {
    super();
    this.state = {
      allBeers: [],
    };
  }

  componentDidMount() {
    this.loadBeerData();
  }

  loadBeerData() {
    beerService
      .listAllBeers()
      .then((allBeers) => this.setState({ allBeers }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <>
          <Link to="/">
            <img src="./images/header.png" alt=""></img>
          </Link>
        </>
        <h2>List of All Beers</h2>
        {this.state.allBeers.map((beer) => (
          //<li key={Date.now() * Math.random()}>{beer.name}</li>
          <Single />
        ))}
      </div>
    );
  }
}

export default List;
