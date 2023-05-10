import { createSlice } from "@reduxjs/toolkit";

const initialState = {//set state base
  pokemonData : {
    name: "pikachu",
  },
};

export const authSlice = createSlice({// set reducer 
  name: "auth", //set a name for the reducer
  initialState,//set the base state data
  reducers: {
    setPokemon: (state, action) => {// set the user name and his token 
      state.pokemonData = action.payload.pokemonData;
    }
  },
});

export const { setPokemon } =
  authSlice.actions;
export default authSlice.reducer;
