import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as beerService from './../services/beerApi';

export default class Random extends Component {
  constructor() {
    super();
    this.state = {
      randomBeer: {},
    };
  }

  componentDidMount() {
    this.loadBeerData();
  }

  loadBeerData() {
    beerService
      .getRandomBeer()
      .then((randomBeer) => this.setState({ randomBeer }))
      .catch((error) => console.log(error));
  }
  render() {
    //console.log(this.state.randomBeer)
    return (
      <div>
        <>
          <Link to="/">
            <img src="./images/header.png" alt=""></img>
          </Link>
        </>
        <h2>Random Beer</h2>
        <img src={this.state.randomBeer.image} />
        <p>Name: {this.state.randomBeer.name}</p>
        <p>Tagline: {this.state.randomBeer.tagline}</p>
        <p>Contributed by: {this.state.randomBeer.contributed_by}</p>
      </div>
    );
  }
}
