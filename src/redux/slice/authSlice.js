/* eslint-disable no-debugger*/
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  authToken: ""
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
   
    logout: () => initialState,
    user: (state, action) => {
        if(action?.payload){
            state.user = action.payload;
        }
    }, 
    authToken: (state, action) => {
      if(action?.payload){
        state.authToken = action.payload;
    }
    }
  }
});

export const { user, authToken, logout } = authSlice.actions;
export default authSlice.reducer;