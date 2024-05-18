import { useContext } from 'react';
import { DarkModeContext } from './Components/DarkModeContext';
import Header from './Components/Header';
import Countries from './Components/Countries';
import CountryDetail from './Components/CountryDetail';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'dark bg-black' : 'bg-gray-100 m-6'}>
      <Header />
      <Routes>
        <Route path='/' element={<Countries />}/>
        <Route path='/countryDetail' element={<CountryDetail />}/>
      </Routes>
    </div>
  );
}

export default App;

// import { useContext } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { DarkModeContext } from './Components/DarkModeContext';
// import Header from './Components/Header';
// import Search from './Components/Search';
// import Countries from './Components/Countries';
// import CountryDetail from './Components/CountryDetail';

// function App() {
//   const { darkMode } = useContext(DarkModeContext);

//   return (
//     <div className={darkMode ? 'dark bg-black' : 'bg-gray-100 m-6'}>
//       <Header />
//       <Search />
//       <Router>
//         <Switch>
//           <Route exact path="/" component={Countries} />
//           <Route path="/country/:name" component={CountryDetail} />
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;
