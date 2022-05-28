/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Need to use the React-specific entry point to allow generating React hooks
type SinglePokemon = {
abilities: Abilities[],
base_experience: number,
forms: Forms[]
moves: Moves[]
}

  type Moves = {
    move: {name:string},
  }

  type Forms = {
    name: string,
    url: string,
  }

  type Abilities = {
    ability: Ability
    is_hidden: boolean,
    slot: number
  }

  type Ability = {
    name: string,
    url: string,
  }

type AllPokemonsResponse = {
  count: number
  next: string
  previous: null | string
  results: Pokemon[]
}

  type Pokemon = {
    name: string
    url: string
  }

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query<AllPokemonsResponse, void>({
      query: () => 'pokemon',
    }),
    getPokemonByName: builder.query<SinglePokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetAllPokemonsQuery } = pokemonApi;

export default pokemonApi;
