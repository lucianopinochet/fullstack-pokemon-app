import { createSlice } from "@reduxjs/toolkit";
import { profile } from "console";

const initialState = {//set state base
  userName: null,
  token: null,
  profilePhoto:null,
};

export const authSlice = createSlice({// set reducer 
  name: "auth", //set a name for the reducer
  initialState,//set the base state data
  reducers: {
    setLogin:(state, action) => {
      state.userName = action.payload.userName
      state.token = action.payload.token
      state.profilePhoto = action.payload.profilePhoto
    },
    setLogout:(state) => {
      state.userName = null
    },
  },
});

export const { setLogin, setLogout } =
  authSlice.actions;
export default authSlice.reducer;
