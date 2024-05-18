

import { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from '../Components/DarkModeContext';
import Search from '../Components/Search';
import CountryCard from '../Components/CountryCard';

const initialDisplayCount = 8;

const Countries = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch('./src/assets/data.json')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch(error => console.error('Error fetching countries data:', error));
  }, []);

  useEffect(() => {
    let filtered = countries;

    if (searchTerm) {
      filtered = filtered.filter(country =>
        country.name.toLowerCase().includes(searchTerm)
      );
    }

    if (selectedContinent !== 'all') {
      filtered = filtered.filter(country =>
        country.region.toLowerCase() === selectedContinent
      );
    }

    setFilteredCountries(filtered);
  }, [searchTerm, selectedContinent, countries]);

  const handleGenerateMore = () => {
    setDisplayCount(displayCount + 8);
  };

  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleFilterChange = (continent) => {
    setSelectedContinent(continent);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleBackToList = () => {
    setSelectedCountry(null);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Search onSearchChange={handleSearchChange} onFilterChange={handleFilterChange} />
      <h1 className={`${darkMode ? 'text-gray-100' : 'text-gray-900'} text-3xl font-semibold text-center mb-6`}>Countries</h1>
      
      {selectedCountry ? (
        <div className="flex justify-center items-center m-6">
          
          <div className="country-detail-card max-w-sm w-full border-gray-700 rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
          <button
              className={`bg-gray-100 text-gray-800 align-items-left font-bold py-2 px-4 rounded mb-4 ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300'} ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}
              onClick={handleBackToList}
            >
              Back <span className='font-bold'>&rarr;</span> 

            </button>
            <div className="image-container">
              <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-full h-48 object-cover" />
            </div>
            <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'}`}>
              <h3 className={`ml-2 text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{selectedCountry.name}</h3>
              <div className="items-center ml-2">
                <p className={`text-gray-600 ${darkMode ? 'dark:text-gray-400' : ''}`}>Population: {selectedCountry.population.toLocaleString()}</p>
                <p className={`text-gray-600 ${darkMode ? 'dark:text-gray-400' : ''}`}>Region: {selectedCountry.region}</p>
                <p className={`text-gray-600 ${darkMode ? 'dark:text-gray-400' : ''}`}>Capital: {selectedCountry.capital}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-6">
            {filteredCountries.slice(0, displayCount).map((country, index) => (
              <CountryCard key={index} country={country} darkMode={darkMode} onClick={() => handleCountryClick(country)} />
            ))}
          </div>
          {displayCount < filteredCountries.length && (
            <div className="text-center">
              <button className={`bg-gray-100 mb-10 text-gray-800 font-semibold py-2 px-4 rounded ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300'} ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`} onClick={handleGenerateMore}>
                Generate More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Countries;
