import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../Store/PokemonSlice/PokemonSlice';

const SinglePokemonMoves = () => {
  const { id } = useParams();
  const SinglePokemon = useGetPokemonByNameQuery(`${id}`);

  return (
    <div>
      {SinglePokemon.data?.moves.map((element) => (
        <div key={Math.random()}>
          <span>{`Moves: ${element.move.name}`}</span>
        </div>
      ))}
    </div>
  );
};

export default SinglePokemonMoves;
