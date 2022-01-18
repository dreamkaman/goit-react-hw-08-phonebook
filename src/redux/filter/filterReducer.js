import { createReducer } from '@reduxjs/toolkit';

import { changeFilterAction } from './filterAction.js';

const initialState = '';

export const filterReducer = createReducer(initialState, {
  [changeFilterAction]: (state, action) => action.payload,
});
