import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = ({
  name, flag, population, capital,
}) => (
  <Link to={`/country/${name}`} style={{ textDecoration: 'none' }}>
    <div className="card">
      <img src={flag} alt={`Flag of ${name}`} style={{ width: '100%' }} />
      <div className="card-content">

        <h3>{name}</h3>
        <p>
          Population:
          {' '}
          {population.toLocaleString()}
        </p>
        <p>
          Capital:
          {' '}
          {capital}
        </p>
      </div>
    </div>
  </Link>
);

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  capital: PropTypes.string.isRequired,
};

export default CountryCard;
