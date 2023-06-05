import { createSlice } from "@reduxjs/toolkit";
import { token } from "../../static";


interface UserState {
  isAuth: boolean;
  userInfo: null | object;
}

const checkAuth = Boolean(localStorage.getItem(token))

const initialState: UserState = {
  isAuth: checkAuth,
  userInfo: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   setAuth:(state, action)=>{
     state.isAuth = Boolean(action.payload)
   },
   setUser:(state, action)=>{
       console.log(action.payload)
     state.userInfo = action.payload
   }
  },

});

export const {setAuth, setUser} = userSlice.actions;

export default userSlice.reducer;
