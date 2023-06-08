import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  inAuthenticared: false,
};

export const userReducer = createReducer(initialState, {
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.inAuthenticared = true;
    state.user = action.payload;
  },
  LoadUserFail: (state) => {
    state.loading = false;
    state.error = action.payload;
    state.inAuthenticared = false;
  },
  ClearErrors: (state) => {
    state.error = null;
  },
});
