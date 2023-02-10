import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://restcountries.com/v2/regionalbloc/au';

const FETCH_COUNTRIES = 'countries/FETCH_COUNTRIES';
const SEARCH_COUNTRIES = 'countries/SEARCH_COUNTRIES';

export const fetchCountries = createAsyncThunk(FETCH_COUNTRIES, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

export const searchCountries = (payload) => ({
  type: SEARCH_COUNTRIES,
  payload: payload.length > 0 ? payload : '',
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    originalCountries: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => (
      { ...state, countries: action.payload, originalCountries: action.payload }));
    builder.addCase(SEARCH_COUNTRIES, (state, action) => {
      if (action.payload === '') {
        return { ...state, countries: state.originalCountries };
      }
      return {
        ...state,
        countries: [...state.originalCountries.filter((country) => {
          const countryName = country.name.toLowerCase();
          return countryName.includes(action.payload.toLowerCase());
        })],
      };
    });
  },
});

export default countriesSlice.reducer;
