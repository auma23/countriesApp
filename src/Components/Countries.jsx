

// import { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { DarkModeContext } from '../Components/DarkModeContext';
// import Search from '../Components/Search';
// // import data from '../assets/data.json';
// import CountryCard from '../Components/CountryCard';

// const initialDisplayCount = 8;

// const Countries = () => {
//   const { darkMode } = useContext(DarkModeContext);
//   const [displayCount, setDisplayCount] = useState(initialDisplayCount);
//   const [countries, setCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedContinent, setSelectedContinent] = useState('all');

//   useEffect(() => {
//     fetch('./src/assets/data.json')
//       .then(response => response.json())
//       .then(data => {
//         setCountries(data);
//         setFilteredCountries(data);
//       })
//       .catch(error => console.error('Error fetching countries data:', error));
//   }, []);

//   useEffect(() => {
//     let filtered = countries;

//     if (searchTerm) {
//       filtered = filtered.filter(country =>
//         country.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (selectedContinent !== 'all') {
//       filtered = filtered.filter(country =>
//         country.region.toLowerCase() === selectedContinent.toLowerCase()
//       );
//     }

//     setFilteredCountries(filtered);
//   }, [searchTerm, selectedContinent, countries]);

//   const handleGenerateMore = () => {
//     setDisplayCount(displayCount + 8);
//   };

//   const handleSearchChange = (searchTerm) => {
//     setSearchTerm(searchTerm);
//   };

//   const handleFilterChange = (continent) => {
//     setSelectedContinent(continent);
//   };

//   return (
//     <div className={darkMode ? 'dark' : ''}>
//       <Search onSearchChange={handleSearchChange} onFilterChange={handleFilterChange} />
//       <h1 className={`${darkMode ? 'text-gray-100' : 'text-gray-900'} text-3xl font-semibold text-center mb-6`}>Countries</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-6">
//         {filteredCountries.slice(0, displayCount).map((country, index) => (
//           <Link to={`/country/${country.alpha3Code}`} key={index}> 
//             <CountryCard country={country} darkMode={darkMode} />
//           </Link>
//         ))}
//       </div>
//       {displayCount < filteredCountries.length && (
//         <div className="text-center">
//           <button className={`bg-gray-100 mb-10 text-gray-800 font-semibold py-2 px-4 rounded ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300'} ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`} onClick={handleGenerateMore}>
//             Generate More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Countries;


import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../Components/DarkModeContext';
import Search from '../Components/Search';
import CountryCard from '../Components/CountryCard';
import data from '../assets/data.json'; // Import data directly

const initialDisplayCount = 8;

const Countries = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('all');

  useEffect(() => {
    setCountries(data); // Set countries directly from imported data
    setFilteredCountries(data); // Set filtered countries directly from imported data
  }, []);

  useEffect(() => {
    let filtered = countries;

    if (searchTerm) {
      filtered = filtered.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedContinent !== 'all') {
      filtered = filtered.filter(country =>
        country.region.toLowerCase() === selectedContinent.toLowerCase()
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

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Search onSearchChange={handleSearchChange} onFilterChange={handleFilterChange} />
      {/* <h1 className={`${darkMode ? 'text-gray-100' : 'text-gray-900'} text-3xl font-semibold text-center mb-6`}>Countries</h1> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-6">
        {filteredCountries.slice(0, displayCount).map((country, index) => (
          <Link to={`/country/${country.alpha3Code}`} key={index}> 
            <CountryCard country={country} darkMode={darkMode} />
          </Link>
        ))}
      </div>
      {displayCount < filteredCountries.length && (
        <div className="text-center">
          <button className={`bg-gray-100 mb-10 text-gray-800 font-semibold py-2 px-4 rounded ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300'} ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`} onClick={handleGenerateMore}>
            Generate More
          </button>
        </div>
      )}
    </div>
  );
};

export default Countries;
