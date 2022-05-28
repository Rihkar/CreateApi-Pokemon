/* eslint-disable no-const-assign */
/* eslint-disable no-return-assign */
/* eslint-disable max-len */
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../Store/PokemonSlice/PokemonSlice';

const SinglePokemonPage = () => {
  const { id } = useParams();
  const SinglePokemon = useGetPokemonByNameQuery(`${id}`);
  const navigate = useNavigate();

  return (
    <div className="single-pokemon-container-wrapper">
      <div className="single-pokemon-container">
        <button
          className="button-change-pokemon"
          onClick={() => navigate(Number(id) === 1 ? '/pokemon/898' : `/pokemon/${Number(id) - 1}`)}
        >
          prev
        </button>
        <div className="single-pokemon">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt=""
          />
          <div className="single-pokemon-info">
            {SinglePokemon.data?.abilities.map((element) => (
              <div key={Math.random()}>
                <span>{`Ablitity: ${element.ability.name}`}</span>
              </div>
            ))}
            <span>{`Base XP: ${SinglePokemon.data?.base_experience}`}</span>
            {SinglePokemon.data?.forms.map((element) => (
              <div key={Math.random()}>
                <span>{`Forms: ${element.name}`}</span>
              </div>
            ))}
            <button
              className="button-see-moves"
              onClick={() => navigate(`/pokemon/${id}/moves`)}
            >
              See moves
            </button>
          </div>
        </div>

        <button
          className="button-change-pokemon"
          onClick={() => navigate(Number(id) === 898 ? '/pokemon/1' : `/pokemon/${Number(id) + 1}`)}
        >
          next
        </button>
      </div>
      <span className="pokemon-count">{`${id}/898`}</span>
    </div>

  );
};

export default SinglePokemonPage;
