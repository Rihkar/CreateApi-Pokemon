import './Styles/reset.scss';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPokemonsPage from './Components/AllPokemonsPage/AllPokemonsPage';
import SinglePokemonPage from './Components/SinglePokemonPage/SinglePokemonPage';
import SinglePokemonMoves from './Components/SinglePokemonMoves/SinglePokemonMoves';

const App = () => (
  <Router>
    <header>
      <span> Pokémon page</span>
    </header>
    <Routes>
      <Route path="/" element={<AllPokemonsPage />} />
      <Route path="/pokemon/:id" element={<SinglePokemonPage />} />
      <Route path="/pokemon/:id/moves" element={<SinglePokemonMoves />} />
    </Routes>
  </Router>
);

export default App;
