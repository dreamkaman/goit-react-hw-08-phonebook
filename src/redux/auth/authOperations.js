import { createAsyncThunk } from '@reduxjs/toolkit';
import { phonebookAPI, token } from '../../services/api/phonebookAPI';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await phonebookAPI.signupUser(credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await phonebookAPI.loginUser(credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await phonebookAPI.logoutUser();
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Error apeared');
    }

    token.set(persistedToken);
    const { data } = await phonebookAPI.getCurrentUser();

    return data;
  } catch (error) {}
});

export const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};
