

import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DarkModeContext } from '../Components/DarkModeContext';
import data from '../assets/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const CountryDetail = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const countryData = data.find((item) => item.alpha3Code === countryCode);
        if (!countryData) throw new Error('Country not found');
        setCountry(countryData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [countryCode]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-200 p-5 rounded-lg shadow-lg">
          <p className="text-lg font-semibold mb-2">Loading...</p>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-100 p-5 rounded-lg shadow-lg">
          <p className="text-lg font-semibold mb-2">Error:</p>
          <p className="text-red-700">{error.message}</p>
        </div>
      </div>
    );

  
  return (
    <div className={`${darkMode ? 'dark' : ''} mt-14 mb-28 pb-10 w-[90%] mx-auto`}>
      <div className="grid grid-cols-1 gap-4 md:mb-16">
        <Link to="/" className="block">
          <div className="transition duration-1000">
            <button
              type="button"
              className={`${
                darkMode
                  ? 'text-white bg-dark-blue hover:text-dark-gray hover:bg-very-dark-blue-lm shadow-dark-shadow-xl'
                  : 'text-very-dark-blue-dm bg-white hover:text-dark-gray hover:bg-very-dark-blue-lm shadow-xl'
              } inline-flex items-center justify-center px-8 py-3 font-semibold rounded-md text-sm transition duration-300`}
            >
              <span className="mr-2">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className={`${darkMode ? 'text-white' : 'text-dark-gray'}`}
                />
              </span>
              Back
            </button>
          </div>
        </Link>
      </div>
  
      <div className="md:grid md:grid-cols-2 md:gap-10 md:justify-center md:items-center">
        <div className="mt-16 mb-10 md:mt-0 md:mb-0 w-full">
          <img
            src={country?.flags?.svg}
            alt={country?.name?.common}
            className="rounded-lg w-full"
          />
        </div>
  
        <div className={`${darkMode ? 'text-white' : 'text-very-dark-blue-dm'}`}>
          <div className="mb-4 font-extrabold text-xl">
            <h1>{country?.name?.common}</h1>
          </div>
  
          <div className="md:grid md:grid-cols-2 md:gap-3 mb-12">
            <div className="mb-10 flex flex-col gap-2">
              <div className="flex text-sm">
                <p className="font-semibold mr-1">Native Name:</p>
                <span>
                  {country?.name && country?.nativeName && Object.values(country.nativeName)[0] && (
                    Object.values(country.nativeName)
                  )}
                </span>
              </div>
              
              <div className="flex text-sm">
                <p className="font-semibold mr-1">Population:</p>
                <span>{country?.population?.toLocaleString()}</span>
              </div>
              <div className="flex text-sm">
                <p className="font-semibold mr-1">Region:</p>
                <span>{country?.region}</span>
              </div>
              <div className="flex text-sm">
                <p className="font-semibold mr-1">Sub Region:</p>
                <span>{country?.subregion}</span>
              </div>
              <div className="flex text-sm">
                <p className="font-semibold mr-1">Capital:</p>
                <span>{country?.capital}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex text-sm">
                   <p className="font-semibold mr-1">Top Level Domain:</p>
                   <span>{country?.topLevelDomain?.join(', ')}</span>
                </div>
                <div className="flex text-sm">
                   <p className="font-semibold mr-1">Currencies:</p>
                   <span>
                    {country?.currencies &&
                    Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(', ')}
                  </span>
                </div>
               
                <div className="flex text-sm">
                  <p className="font-semibold mr-1">Languages:</p>
                  <span>
                    {country?.languages &&
                    Object.values(country.languages).map(lang => (typeof lang === 'object' ? lang.name : lang)).join(', ')}
                  </span>
                </div>
                <div className="flex text-sm">
                  <p className="font-semibold mr-1">Area:</p>
                  <span>{country?.area?.toLocaleString()} km²</span>
               </div>
             </div>
           </div>
          </div>
  
          <div className="mt-10">
            <div className="md:flex md:gap-3 md:items-center">
              <div className="text-base font-semibold">
                <h3>Border Countries:</h3>
              </div>
              <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                {country?.borders?.map((borderCode) => (
                  <Link to={`/country/${borderCode}`} key={borderCode}>
                    <button
                      type="button"
                      className={`${
                        darkMode
                          ? 'text-white bg-dark-blue hover:text-dark-gray hover:bg-very-dark-blue-lm shadow-dark-shadow-xl'
                          : 'text-very-dark-blue-dm bg-white hover:text-dark-gray hover:bg-very-dark-blue-lm shadow-xl'
                      } inline-flex items-center justify-center px-4 py-2 font-semibold rounded-md text-sm transition duration-300`}
                    >
                      {borderCode}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default CountryDetail;

