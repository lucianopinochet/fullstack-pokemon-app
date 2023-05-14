import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  session:{
    userName: "",
    token: "",
    picturePath:"",

  }
};
export interface RootState {
  session:{
    userName: string
    token: string
    picturePath:string
  }
}

export const authSlice = createSlice({// set reducer 
  name: "auth", //set a name for the reducer
  initialState,//set the base state data
  reducers: {
    setLogin:(state, action) => {
      state.session.userName = action.payload.userName
      state.session.token = action.payload.token
      state.session.picturePath = action.payload.picturePath
    },
    setLogout:(state) => {
      state.session.userName = ""
      state.session.token = ""
      state.session.picturePath = ""
    },
  },
});

export const { setLogin, setLogout } =
  authSlice.actions;
export default authSlice.reducer;
