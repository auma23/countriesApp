

import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { DarkModeContext } from '../Components/DarkModeContext';

const continents = [
  { value: 'all', label: 'All' },
  { value: 'africa', label: 'Africa' },
  { value: 'asia', label: 'Asia' },
  { value: 'north america', label: 'North America' },
  { value: 'south america', label: 'South America' },
  { value: 'antarctica', label: 'Antarctica' },
  { value: 'europe', label: 'Europe' },
  { value: 'australia', label: 'Australia' },
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
    setSelectedContinent(value);
    onFilterChange(value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`search-and-filter m-6 ${darkMode ? 'dark' : ''}`}>
      <div className="flex justify-between items-center">
        <input
          type="text"
          className={`search-box px-6 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
            isOpen ? 'border-gray-500' : ''
          } ${darkMode ? 'text-gray-100 bg-gray-900 border-gray-700' : 'text-gray-800 bg-gray-100 border-gray-500'}`}
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <div className="filter-by-region relative ml-2">
          <span className={`${darkMode ? 'text-gray-100' : 'text-gray-600'} mr-4`}>Filter by Region:</span>
          <button
            type="button"
            className={`rounded-md border px-3 py-1 appearance-none focus:outline-none hover:bg-gray-700 ${
              isOpen ? 'bg-gray-700 text-white' : ''
            } ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-white border-gray-500 text-gray-800 hover:bg-gray-200'}`}
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

export default Search;


          