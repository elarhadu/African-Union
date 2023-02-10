import React from 'react';
import Countries from '../components/Countries';
import FindCountry from '../components/FindCountry';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <FindCountry />
      <Countries />
    </div>
  );
}
