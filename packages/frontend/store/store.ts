import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { authSlice } from './auth';

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
