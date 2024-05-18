import { Link } from "react-router-dom";



const CountryCard = ({ country, darkMode, onClick }) => {
  return (
    <div onClick={onClick} className="country-card cursor-pointer border-gray-700 rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
      <Link to='countryDetail'>
         <div className="image-container">
           <img src={country.flag} alt={country.name} className="w-full h-48 object-cover" />
         </div>
      </Link>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'}`}>
        <h3 className={`ml-2 text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{country.name}</h3>
        <div className="items-center ml-2">
          <p className={`text-gray-600 ${darkMode ? 'dark:text-gray-400' : ''}`}>Population: {country.population.toLocaleString()}</p>
          <p className={`text-gray-600 ${darkMode ? 'dark:text-gray-400' : ''}`}>Region: {country.region}</p>
        </div>
        <div className="ml-2 pb-2">
          <p className={`text-gray-600 ${darkMode ? 'dark:text-gray-400' : ''}`}>Capital: {country.capital}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
