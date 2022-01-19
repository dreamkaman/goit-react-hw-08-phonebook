import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { logger } from 'redux-logger';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { phonebookReducer } from './contacts/contactsReducer.js';
import { filterReducer } from './filter/filterReducer.js';
import authSlice from './auth/authSlice.js';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

const rootReducer = combineReducers({
  phoneBook: phonebookReducer,
  // items: contactReducer,
  filter: filterReducer,
  auth: persistedReducer,
});

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

const persistedStore = { store, persistor };

export default persistedStore;
