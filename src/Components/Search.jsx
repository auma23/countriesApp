

import { useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { DarkModeContext } from '../Components/DarkModeContext';

const continents = [
  { value: 'all', label: 'All' },
  { value: 'africa', label: 'Africa' },
  { value: 'asia', label: 'Asia' },
  { value: 'polar', label: 'Polar' },
  { value: 'americas', label: 'Americas' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

const Search = ({ onSearchChange, onFilterChange }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState(continents[0]);

  const handleSearchInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleContinentChange = (value) => {
    setSelectedContinent(continents.find((continent) => continent.value === value));
    onFilterChange(value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`search-and-filter  max-w-screen-lg sm:px-6 lg:px-8 ${darkMode ? 'dark' : ''}`}>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="relative flex items-center mb-4 sm:mb-0">
          <FontAwesomeIcon
            icon={faSearch}
            className={`absolute left-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          />
          <input
            type="text"
            className={`search-box pl-10 pr-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
              isOpen ? 'border-gray-500' : ''
            } ${darkMode ? 'text-gray-100 bg-gray-900 border-gray-700' : 'text-gray-800 bg-gray-100 border-gray-500'}`}
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="filter-by-region relative">
          <span className={` mr-4 ml-11 ${darkMode ? 'text-gray-100' : 'text-gray-600'} `}>Filter by Region:</span>
          <button
            type="button"
            className={`rounded-md border px-3 py-1 appearance-none focus:outline-none text-gray-800 hover:bg-gray-100 hover:text-gray-800 ${
              isOpen ? 'bg-gray-700 text-gray-100' : ''
            } ${darkMode ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-600' : 'bg-white border-gray-500 text-gray-800 hover:bg-gray-200 hover:text-gray-800'}`}
            onClick={toggleDropdown}
          >
            <span className="flex items-center">
              {selectedContinent.label}
              <FontAwesomeIcon
                icon={isOpen ? faChevronUp : faChevronDown}
                className={`h-4 w-4 ml-1 ${darkMode ? 'text-gray-200' : 'text-gray-400'}`}
              />
            </span>
          </button>
          <ul
            className={`dropdown absolute top-full left-0 w-full rounded-md shadow-md overflow-hidden transition duration-200 ease-in-out ${
              isOpen ? 'block' : 'hidden'
            } ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}
          >
            {continents.map((continent) => (
              <li
                key={continent.value}
                className={`hover:bg-gray-700 px-3 py-1 cursor-pointer ${darkMode ? 'text-gray-200' : 'text-gray-800 hover:bg-gray-200'}`}
                onClick={() => {
                  handleContinentChange(continent.value);
                  setIsOpen(false);
                }}
              >
                {continent.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for onSearchChange and onFilterChange
Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Search;

         