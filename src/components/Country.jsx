import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCountries } from '../redux/countries';

const Country = () => {
  const state = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  const { name } = useParams();
  const country = state.find((item) => item.name === name);

  return (
    <div className="country-data">
      <Link to="/"><button type="button">Back</button></Link>
      <h1>{country.name}</h1>
      <img src={country.flags.svg} alt={`${country.name}'s Flag`} />
      <div>
        Capital:
        <span>{country.capital}</span>
      </div>
      <div>
        {' '}
        Area:
        <span>
          {`${country.area} km²`}
        </span>
      </div>
      <div>
        Population:
        <span>
          {country.population}
        </span>
      </div>
    </div>
  );
};

export default Country;
