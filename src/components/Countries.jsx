import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countries';
import CountryCard from './CountriesCard';
import './Countries.css';

export default function Countries() {
  const { countries, loading, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        Error:
        {' '}
        {error.message}
      </p>
    );
  }

  if (!countries) {
    return <h2>No countries found</h2>;
  }

  return (
    <div className="card-container">
      {countries.map((country) => (
        <CountryCard
          key={country.name}
          name={country.name}
          flag={country.flag}
          population={country.population}
          capital={country.capital}
        />
      ))}
    </div>
  );
}
