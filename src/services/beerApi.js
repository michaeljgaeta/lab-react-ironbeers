import axios from 'axios';

const listAllBeers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((result) => {
        //console.log(result.data);
        const allBeers = result.data;
        resolve(allBeers);
      })
      .catch((error) => reject(error));
  });
};

const getRandomBeer = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((result) => {
        //console.log(result);
        resolve(result.data);
      })
      .catch((error) => reject(error));
  });
};

export { listAllBeers, getRandomBeer };
