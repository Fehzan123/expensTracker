import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthentication: false,
  ispremium: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthentication = true;
      localStorage.setItem("token", action.payload);
    },
    logout(state) {
      state.isAuthentication = false;
      localStorage.removeItem("token");
    },
    ispremium(state, action) {
      state.ispremium = action.payload > 10000;
    },
  }
});

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const authAction = authSlice.actions;
export const darkModeAction = darkModeSlice.actions;

export const authReducer = authSlice.reducer;
export const darkModeReducer = darkModeSlice.reducer;
