/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Countries from '../components/Countries';
import FindCountry from '../components/FindCountry';
import { fetchCountries, searchCountries } from '../redux/countries';

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <FindCountry />
      <Countries />
    </div>
  );
}
