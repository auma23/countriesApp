// import { useContext } from 'react';
// import { DarkModeContext } from './Components/DarkModeContext';
// import Header from './Components/Header';
// import Countries from './Components/Countries';
// import CountryDetail from './Components/CountryDetail';
// import { Route, Routes } from 'react-router-dom';

// function App() {
//   const { darkMode } = useContext(DarkModeContext);

//   return (
//     <div className={darkMode ? 'dark bg-black' : 'bg-gray-100 m-6'}>
//       <Header />
//       <Routes>
//         <Route path='/' element={<Countries />}/>
//         {/* <Route path='/countryDetail' element={<CountryDetail />}/> */}
//         <Route path="/details/:countryCode" element={<CountryDetail />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Countries from './Components/Countries';
import CountryDetail from './Components/CountryDetail';
import { DarkModeContext } from './Components/DarkModeContext';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'dark bg-gray-800' : 'bg-gray-100 m-6'}>
      <Header />
      <Routes>
        <Route path='/' element={<Countries />} />
        <Route path='/country/:countryCode' element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;


