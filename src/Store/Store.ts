import { configureStore } from '@reduxjs/toolkit';
import pokemonApi from './PokemonSlice/PokemonSlice';

export default configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
});
