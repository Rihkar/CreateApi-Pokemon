/* eslint-disable max-len */
import { useNavigate } from 'react-router-dom';
import { useGetAllPokemonsQuery } from '../../Store/PokemonSlice/PokemonSlice';

const AllPokemonsPage = () => {
  const { data } = useGetAllPokemonsQuery();
  const navigate = useNavigate();

  return (
    <div className="container">
      {data && data.results.map(({ name, url }) => {
        const arr = url.split('/');
        const id = arr[arr.length - 2];

        return (
          <div
            className="pokemon-box"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              alt=""
            />
            <button
              onClick={() => navigate(`/pokemon/${id}`)}
            >
              {name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllPokemonsPage;
