import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountries } from '../redux/countries';
import Header from './Header';

const Country = () => {
  const state = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  const { name } = useParams();
  const country = state.find((item) => item.name === name);

  const cardStyling = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '1rem',
    cursor: 'pointer',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    borderRadius: '1rem',
    textAlign: 'center',
    lineHeight: '0.5rem',
  };

  return (
    <>
      <Header />
      <div className="country-data" style={cardStyling}>
        <h1>{country.name}</h1>
        <img src={country.flags.svg} alt={`${country.name}'s Flag`} />
        <div>
          Capital:
          {' '}
          <span>{country.capital}</span>
        </div>
        <div>
          Region:
          {' '}
          <span>{country.region}</span>
        </div>
        <div>
          Sub-Region:
          {' '}
          <span>{country.subregion}</span>
        </div>
        <div>
          Citizens:
          {' '}
          <span>{country.demonym}</span>
        </div>
        <div>
          Area:
          {' '}
          <span>
            {`${country.area.toLocaleString()} km²`}
          </span>
        </div>
        <div>
          Population:
          {' '}
          <span>
            {country.population.toLocaleString()}
          </span>
        </div>
      </div>
    </>
  );
};

export default Country;
