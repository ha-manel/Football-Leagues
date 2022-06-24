import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Categories from './components/Categories/Categories';
import TeamDetails from './components/Team Details/TeamDetails';
import { fetchLeagues, loadLeagues } from './redux/leagues/leagues';

function App() {
  const dispatch = useDispatch();
  const leagues = useSelector((state) => state.leagues);

  const intitData = async () => {
    const result = await fetchLeagues();
    dispatch(loadLeagues(result));
  };

  if (leagues.length < 1) {
    intitData();
  }

  return (
    <div className="App">
      <Navbar />
      {leagues.length > 1 ? (
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/team" element={<TeamDetails />} />
        </Routes>
      ) : (<i className="fas fa-circle-notch fa-spin" />)}
    </div>
  );
}

export default App;
