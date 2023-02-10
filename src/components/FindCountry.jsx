import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { searchCountries } from '../redux/countries';

export default function FindCountry() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCountries(name));
  }, [dispatch, name]);

  return (
    <section>
      <form className="search" onSubmit={(e) => { e.preventDefault(); }}>
        <label htmlFor="name">
          {' '}
          FIND A COUNTRY
        </label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">search</button>
      </form>
    </section>
  );
}
