import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Single extends Component {
  constructor() {
    super();
    this.state = {
      singleBeer: {},
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.singleBeer.name}</h2>
      </div>
    );
  }
}

export default Single;
