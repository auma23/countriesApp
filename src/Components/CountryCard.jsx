import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = ({ country, darkMode }) => {
  return (
    <div className={`country-card ${darkMode ? 'dark' : ''}`}>
      <Link to={`/country/${country.alpha3Code}`}>
        <div className="image-container">
          <img src={country.flag} alt={country.name} className="w-full h-48 object-cover" />
        </div>
        <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'}`}>
          <h3 className={`ml-2 text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{country.name}</h3>
          <div className="items-center ml-2">
            <p className={`text-gray-600 ${darkMode ? 'dark:text-gray-400' : ''}`}>Population: {country.population.toLocaleString()}</p>
            <p className={`text-gray-600 ${darkMode ? 'dark:text-gray-400' : ''}`}>Region: {country.region}</p>
            <p className={`text-gray-600 ${darkMode ? 'dark:text-gray-400' : ''}`}>Capital: {country.capital}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.shape({
    alpha3Code: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
  }).isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default CountryCard;
