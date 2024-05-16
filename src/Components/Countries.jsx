

// import  { useState } from 'react';

// const initialDisplayCount = 8; 

// const countries = [
//   {
//     name: 'Germany',
//     flag: './src/assets/germany.png',
//     population: 81770900,
//     region: 'Europe',
//     capital: 'Berlin',
//   },
//   {
//     name: 'France',
//     flag: './src/assets/france.png',
//     population: 65273511,
//     region: 'Europe',
//     capital: 'Paris',
//   },

//   {
//     name: 'Germany',
//     flag: './src/assets/germany.png',
//     population: 81770900,
//     region: 'Europe',
//     capital: 'Berlin',
//   },
//   {
//     name: 'France',
//     flag: './src/assets/france.png',
//     population: 65273511,
//     region: 'Europe',
//     capital: 'Paris',
//   },
//   {
//     name: 'United States',
//     flag: './src/assets/usa.png',
//     population: 331449281,
//     region: 'Americas',
//     capital: 'Washington, D.C.',
//   },
//   {
//     name: 'China',
//     flag: './src/assets/china.png',
//     population: 1444216107,
//     region: 'Asia',
//     capital: 'Beijing',
//   },
//   {
//     name: 'Brazil',
//     flag: './src/assets/brazil.png',
//     population: 213993437,
//     region: 'Americas',
//     capital: 'Brasília',
//   },
//   {
//     name: 'India',
//     flag: './src/assets/india.png',
//     population: 1380004385,
//     region: 'Asia',
//     capital: 'New Delhi',
//   },
//   {
//     name: 'Russia',
//     flag: './src/assets/russia.png',
//     population: 146599183,
//     region: 'Europe',
//     capital: 'Moscow',
//   },
//   {
//     name: 'Australia',
//     flag: './src/assets/australia.png',
//     population: 25788225,
//     region: 'Oceania',
//     capital: 'Canberra',
//   },
//   {
//     name: 'South Africa',
//     flag: './src/assets/southafrica.png',
//     population: 59308690,
//     region: 'Africa',
//     capital: 'Pretoria',
//   },
//   {
//     name: 'Germany',
//     flag: './src/assets/germany.png',
//     population: 81770900,
//     region: 'Europe',
//     capital: 'Berlin',
//   },
//   {
//     name: 'France',
//     flag: './src/assets/france.png',
//     population: 65273511,
//     region: 'Europe',
//     capital: 'Paris',
//   },
//   {
//     name: 'United States',
//     flag: './src/assets/usa.png',
//     population: 331449281,
//     region: 'Americas',
//     capital: 'Washington, D.C.',
//   },
//   {
//     name: 'China',
//     flag: './src/assets/china.png',
//     population: 1444216107,
//     region: 'Asia',
//     capital: 'Beijing',
//   },
//   {
//     name: 'Brazil',
//     flag: './src/assets/brazil.png',
//     population: 213993437,
//     region: 'Americas',
//     capital: 'Brasília',
//   },
//   {
//     name: 'India',
//     flag: './src/assets/india.png',
//     population: 1380004385,
//     region: 'Asia',
//     capital: 'New Delhi',
//   },
//   {
//     name: 'Russia',
//     flag: './src/assets/russia.png',
//     population: 146599183,
//     region: 'Europe',
//     capital: 'Moscow',
//   },
//   {
//     name: 'Australia',
//     flag: './src/assets/australia.png',
//     population: 25788225,
//     region: 'Oceania',
//     capital: 'Canberra',
//   },
//   {
//     name: 'South Africa',
//     flag: './src/assets/southafrica.png',
//     population: 59308690,
//     region: 'Africa',
//     capital: 'Pretoria',
//   },
//   {
//     name: 'Germany',
//     flag: './src/assets/germany.png',
//     population: 81770900,
//     region: 'Europe',
//     capital: 'Berlin',
//   },
//   {
//     name: 'France',
//     flag: './src/assets/france.png',
//     population: 65273511,
//     region: 'Europe',
//     capital: 'Paris',
//   },
//   {
//     name: 'United States',
//     flag: './src/assets/usa.png',
//     population: 331449281,
//     region: 'Americas',
//     capital: 'Washington, D.C.',
//   },
//   {
//     name: 'China',
//     flag: './src/assets/china.png',
//     population: 1444216107,
//     region: 'Asia',
//     capital: 'Beijing',
//   },
//   {
//     name: 'Brazil',
//     flag: './src/assets/brazil.png',
//     population: 213993437,
//     region: 'Americas',
//     capital: 'Brasília',
//   },
//   {
//     name: 'India',
//     flag: './src/assets/india.png',
//     population: 1380004385,
//     region: 'Asia',
//     capital: 'New Delhi',
//   },
//   {
//     name: 'Russia',
//     flag: './src/assets/russia.png',
//     population: 146599183,
//     region: 'Europe',
//     capital: 'Moscow',
//   },
//   {
//     name: 'Australia',
//     flag: './src/assets/australia.png',
//     population: 25788225,
//     region: 'Oceania',
//     capital: 'Canberra',
//   },
//   {
//     name: 'South Africa',
//     flag: './src/assets/southafrica.png',
//     population: 59308690,
//     region: 'Africa',
//     capital: 'Pretoria',
//   },
//   {
//     name: 'Germany',
//     flag: './src/assets/germany.png',
//     population: 81770900,
//     region: 'Europe',
//     capital: 'Berlin',
//   },
//   {
//     name: 'France',
//     flag: './src/assets/france.png',
//     population: 65273511,
//     region: 'Europe',
//     capital: 'Paris',
//   },
//   {
//     name: 'United States',
//     flag: './src/assets/usa.png',
//     population: 331449281,
//     region: 'Americas',
//     capital: 'Washington, D.C.',
//   },
//   {
//     name: 'China',
//     flag: './src/assets/china.png',
//     population: 1444216107,
//     region: 'Asia',
//     capital: 'Beijing',
//   },
//   {
//     name: 'Brazil',
//     flag: './src/assets/brazil.png',
//     population: 213993437,
//     region: 'Americas',
//     capital: 'Brasília',
//   },
//   {
//     name: 'India',
//     flag: './src/assets/india.png',
//     population: 1380004385,
//     region: 'Asia',
//     capital: 'New Delhi',
//   },
//   {
//     name: 'Russia',
//     flag: './src/assets/russia.png',
//     population: 146599183,
//     region: 'Europe',
//     capital: 'Moscow',
//   },
//   {
//     name: 'Australia',
//     flag: './src/assets/australia.png',
//     population: 25788225,
//     region: 'Oceania',
//     capital: 'Canberra',
//   },
//   {
//     name: 'South Africa',
//     flag: './src/assets/southafrica.png',
//     population: 59308690,
//     region: 'Africa',
//     capital: 'Pretoria',
//   },
  
// ];

// const Countries = () => {
//   const [displayCount, setDisplayCount] = useState(initialDisplayCount);

//   const handleGenerateMore = () => {
//     setDisplayCount(displayCount + 8);
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-semibold text-center mb-6">Countries</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-6">
//         {countries.slice(0, displayCount).map((country, index) => (
//           <div key={index} className="country-card border border-gray-700 rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
//             <div className="image-container">
//               <img src={country.flag} alt={country.name} className="w-full h-48 object-cover" />
//             </div>
//             <div className="p-4">
//               <h3 className="text-lg font-medium text-gray-100 dark:text-white">{country.name}</h3>
//               <div className="items-center mt-2">
//                 <p className="text-gray-600 dark:text-gray-400">Population: {country.population.toLocaleString()}</p>
//                 <p className="text-gray-600 dark:text-gray-400">Region: {country.region}</p>
//               </div>
//               <div className="mt-2">
//                 <p className="text-gray-600 dark:text-gray-400">Capital: {country.capital}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {displayCount < countries.length && (
//         <div className="text-center">
//           <button className="bg-gray-00 text-white font-semibold py-2 px-4 rounded" onClick={handleGenerateMore}>
//             Generate More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Countries;

import { useState, useContext } from 'react';
import { DarkModeContext } from '../Components/DarkModeContext';

const initialDisplayCount = 8;

const countries = [
    
    
      {
        name: 'Germany',
        flag: './src/assets/germany.png',
        population: 81770900,
        region: 'Europe',
        capital: 'Berlin',
      },
      {
        name: 'France',
        flag: './src/assets/france.png',
        population: 65273511,
        region: 'Europe',
        capital: 'Paris',
      },
      {
        name: 'United States',
        flag: './src/assets/usa.png',
        population: 331449281,
        region: 'Americas',
        capital: 'Washington, D.C.',
      },
      {
        name: 'China',
        flag: './src/assets/china.png',
        population: 1444216107,
        region: 'Asia',
        capital: 'Beijing',
      },
      {
        name: 'Brazil',
        flag: './src/assets/brazil.png',
        population: 213993437,
        region: 'Americas',
        capital: 'Brasília',
      },
      {
        name: 'India',
        flag: './src/assets/india.png',
        population: 1380004385,
        region: 'Asia',
        capital: 'New Delhi',
      },
      {
        name: 'Russia',
        flag: './src/assets/russia.png',
        population: 146599183,
        region: 'Europe',
        capital: 'Moscow',
      },
      {
        name: 'Australia',
        flag: './src/assets/australia.png',
        population: 25788225,
        region: 'Oceania',
        capital: 'Canberra',
      },
      {
        name: 'South Africa',
        flag: './src/assets/southafrica.png',
        population: 59308690,
        region: 'Africa',
        capital: 'Pretoria',
      },
      {
        name: 'Germany',
        flag: './src/assets/germany.png',
        population: 81770900,
        region: 'Europe',
        capital: 'Berlin',
      },
      {
        name: 'France',
        flag: './src/assets/france.png',
        population: 65273511,
        region: 'Europe',
        capital: 'Paris',
      },
      {
        name: 'United States',
        flag: './src/assets/usa.png',
        population: 331449281,
        region: 'Americas',
        capital: 'Washington, D.C.',
      },
      {
        name: 'China',
        flag: './src/assets/china.png',
        population: 1444216107,
        region: 'Asia',
        capital: 'Beijing',
      },
      {
        name: 'Brazil',
        flag: './src/assets/brazil.png',
        population: 213993437,
        region: 'Americas',
        capital: 'Brasília',
      },
      {
        name: 'India',
        flag: './src/assets/india.png',
        population: 1380004385,
        region: 'Asia',
        capital: 'New Delhi',
      },
      {
        name: 'Russia',
        flag: './src/assets/russia.png',
        population: 146599183,
        region: 'Europe',
        capital: 'Moscow',
      },
      {
        name: 'Australia',
        flag: './src/assets/australia.png',
        population: 25788225,
        region: 'Oceania',
        capital: 'Canberra',
      },
      {
        name: 'South Africa',
        flag: './src/assets/southafrica.png',
        population: 59308690,
        region: 'Africa',
        capital: 'Pretoria',
      },
      {
        name: 'Germany',
        flag: './src/assets/germany.png',
        population: 81770900,
        region: 'Europe',
        capital: 'Berlin',
      },
      {
        name: 'France',
        flag: './src/assets/france.png',
        population: 65273511,
        region: 'Europe',
        capital: 'Paris',
      },
      {
        name: 'United States',
        flag: './src/assets/usa.png',
        population: 331449281,
        region: 'Americas',
        capital: 'Washington, D.C.',
      },
      {
        name: 'China',
        flag: './src/assets/china.png',
        population: 1444216107,
        region: 'Asia',
        capital: 'Beijing',
      },
      {
        name: 'Brazil',
        flag: './src/assets/brazil.png',
        population: 213993437,
        region: 'Americas',
        capital: 'Brasília',
      },
      {
        name: 'India',
        flag: './src/assets/india.png',
        population: 1380004385,
        region: 'Asia',
        capital: 'New Delhi',
      },
      {
        name: 'Russia',
        flag: './src/assets/russia.png',
        population: 146599183,
        region: 'Europe',
        capital: 'Moscow',
      },
      {
        name: 'Australia',
        flag: './src/assets/australia.png',
        population: 25788225,
        region: 'Oceania',
        capital: 'Canberra',
      },
      {
        name: 'South Africa',
        flag: './src/assets/southafrica.png',
        population: 59308690,
        region: 'Africa',
        capital: 'Pretoria',
      },
      {
        name: 'Germany',
        flag: './src/assets/germany.png',
        population: 81770900,
        region: 'Europe',
        capital: 'Berlin',
      },
      {
        name: 'France',
        flag: './src/assets/france.png',
        population: 65273511,
        region: 'Europe',
        capital: 'Paris',
      },
      {
        name: 'United States',
        flag: './src/assets/usa.png',
        population: 331449281,
        region: 'Americas',
        capital: 'Washington, D.C.',
      },
      {
        name: 'China',
        flag: './src/assets/china.png',
        population: 1444216107,
        region: 'Asia',
        capital: 'Beijing',
      },
      {
        name: 'Brazil',
        flag: './src/assets/brazil.png',
        population: 213993437,
        region: 'Americas',
        capital: 'Brasília',
      },
      {
        name: 'India',
        flag: './src/assets/india.png',
        population: 1380004385,
        region: 'Asia',
        capital: 'New Delhi',
      },
      {
        name: 'Russia',
        flag: './src/assets/russia.png',
        population: 146599183,
        region: 'Europe',
        capital: 'Moscow',
      },
      {
        name: 'Australia',
        flag: './src/assets/australia.png',
        population: 25788225,
        region: 'Oceania',
        capital: 'Canberra',
      },
      {
        name: 'South Africa',
        flag: './src/assets/southafrica.png',
        population: 59308690,
        region: 'Africa',
        capital: 'Pretoria',
      },

      {
        name: 'Germany',
        flag: './src/assets/germany.png',
        population: 81770900,
        region: 'Europe',
        capital: 'Berlin',
      },
      {
        name: 'France',
        flag: './src/assets/france.png',
        population: 65273511,
        region: 'Europe',
        capital: 'Paris',
      },
      
];

const Countries = () => {
  const { darkMode } = useContext(DarkModeContext); 
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const handleGenerateMore = () => {
    setDisplayCount(displayCount + 8);
  };

  return (
    <div className={darkMode ? 'dark' : ''}> 
      <h1 className={`${darkMode ? 'text-gray-100' : 'text-gray-900'} text-3xl font-semibold text-center mb-6 `}>Countries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-6">
        {countries.slice(0, displayCount).map((country, index) => (
          <div key={index} className="country-card border border-gray-700 rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
            <div className="image-container">
              <img src={country.flag} alt={country.name} className="w-full h-48 object-cover" />
            </div>
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
        ))}
      </div>
      {displayCount < countries.length && (
        <div className="text-center">
          <button className={`bg-gray-700 mb-10 text-white font-semibold py-2 px-4 rounded ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-800' } ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={handleGenerateMore}>
            Generate More
          </button>
        </div>
      )}
    </div>
  );
};

export default Countries;
