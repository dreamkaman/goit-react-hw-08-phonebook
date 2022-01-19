import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './authOperations';
// import authReducer from './authReducer';
// import authOperations from ''

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user; //thanks to IMMER
      state.token = action.payload.token; //thanks to IMMER
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user; //thanks to IMMER
      state.token = action.payload.token; //thanks to IMMER
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null }; //thanks to IMMER
      state.token = null; //thanks to IMMER
      state.isLoggedIn = false; //
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload; //thanks to IMMER
      state.isLoggedIn = true; //
    },
  },
});

export default authSlice;
