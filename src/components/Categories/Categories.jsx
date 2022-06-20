// import styles from './Categories.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLeagues } from '../../redux/leagues/leagues';

function Categories() {
  // const leagues = useSelector((state) => state.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeagues);
  }, []);

  return (
    <div>
      <div>
        <button type="button">Premier League</button>
        <button type="button">Serie A</button>
        <button type="button">La Liga</button>
        <button type="button">Ligue 1</button>
      </div>
    </div>
  );
}

export default Categories;
