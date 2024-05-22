

// import { useContext } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
// import { DarkModeContext } from './DarkModeContext';

// const Header = () => {
//   const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

//   return (
//     <header className={`p-4 flex justify-between items-center mt-1 m-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'}`}>
//       <h1 className="text-xl font-bold">Where in the world?</h1>
//       <div className="flex items-center">
//         <FontAwesomeIcon
//           icon={darkMode ? faSun : faMoon}
//           className={`h-6 w-6 mr-2 cursor-pointer ${darkMode ? 'text-yellow-400' : 'text-gray-700'}`}
//           onClick={toggleDarkMode}
//         />
//         Dark Mode
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { DarkModeContext } from './DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className={`p-4 flex justify-between items-center mt-1 m-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'}`}>
      <h1 className="text-xl font-bold">Where in the world?</h1>
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          className={`h-6 w-6 mr-2 cursor-pointer ${darkMode ? 'text-yellow-400' : 'text-gray-700'}`}
          onClick={toggleDarkMode}
        />
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </div>
    </header>
  );
};

export default Header;
