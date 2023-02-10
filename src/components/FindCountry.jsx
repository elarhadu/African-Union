import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountries } from '../redux/countries';

export default function FindCountry() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCountries(name));
  }, [dispatch, name]);

  const inputStyles = {
    width: '100%',
    padding: '10px',
    borderRadius: '25px',
    fontSize: '16px',
    backgroundColor: 'white',
  };

  return (
    <section>
      <form className="search" onSubmit={(e) => { e.preventDefault(); }}>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="FIND A COUNTRY" style={inputStyles} />
      </form>
    </section>
  );
}
