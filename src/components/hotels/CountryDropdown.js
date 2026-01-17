import { COUNTRIES } from '../../utils/constants';

const CountryDropdown = ({ selectedCountry, onCountryChange, disabled = false }) => {
  return (
    <div className="w-full max-w-md mx-auto mb-10">
      <label htmlFor="country" className="block text-sm font-medium text-[#3A3A3A] mb-3">
        Select Country
      </label>
      
      <div className="relative">
        <select
          id="country"
          value={selectedCountry}
          onChange={(e) => onCountryChange(e.target.value)}
          disabled={disabled}
          className="w-full px-4 py-3.5 bg-white border border-[#3A3A3A]/15 rounded-lg focus:outline-none focus:border-[#C8A24A] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed text-[#3A3A3A]"
        >
          <option value="">Choose a country...</option>
          {COUNTRIES.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name} ({country.code})
            </option>
          ))}
        </select>
        
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-[#3A3A3A]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      <p className="text-xs text-[#3A3A3A]/50 mt-3 text-center">
        Select a country to discover available hotels
      </p>
    </div>
  );
};

export default CountryDropdown;