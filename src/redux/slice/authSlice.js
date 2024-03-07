/* eslint-disable no-debugger*/
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: ""
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
    }
  }
});

export const { user } = authSlice.actions;
export default authSlice.reducer;