import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from './store';
import { User as PrismaUser } from '@prisma/client';

type User = Pick<PrismaUser, 'id' | 'email' | 'username'> & {
  jwt: string;
};

// Type for our state
export interface AuthState {
  isUserLogged: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isUserLogged: false,
  user: null,
};

type LoginAction = {
  user: User;
};

const loginReducer = (
  state: AuthState = initialState,
  action: PayloadAction<LoginAction>
) => {
  state.isUserLogged = true;
  state.user = action.payload.user;
};

const logoutReducer = (state: AuthState = initialState, _action: unknown) => {
  state.isUserLogged = false;
  state.user = null;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: loginReducer,
    logout: logoutReducer,
  },

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => ({
      ...state,
      ...action.payload,
    }));
  },
});

export const { login, logout } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.isUserLogged;

export default authSlice.reducer;
