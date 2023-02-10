import { searchCountries } from '../redux/countries';

describe('searchCountries', () => {
  it('creates an action with the correct payload', () => {
    expect(searchCountries('').payload).toBe('');
  });
});
