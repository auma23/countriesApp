import { useContext } from 'react';
import { DarkModeContext } from './Components/DarkModeContext';
import Header from './Components/Header';
import Search from './Components/Search';
import Countries from './Components/Countries';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'dark bg-black' : 'bg-gray-100 m-6'}>
      <Header />
      <Search />
      <Countries />
    </div>
  );
}

export default App;
