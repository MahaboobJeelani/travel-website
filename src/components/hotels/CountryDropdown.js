import React from 'react';
import { COUNTRIES } from '../../utils/constants';

const CountryDropdown = ({ selectedCountry, onCountryChange, disabled = false }) => {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
        Select Country
      </label>
      <select
        id="country"
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
        disabled={disabled}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <option value="">Choose a country...</option>
        {COUNTRIES.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name} ({country.code})
          </option>
        ))}
      </select>
      <p className="text-sm text-gray-500 mt-2 text-center">
        Select a country to discover available hotels
      </p>
    </div>
  );
};

export default CountryDropdown;