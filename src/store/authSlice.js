import { createSlice } from "@reduxjs/toolkit";
import users from "../users.json";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (foundUser) {
        state.isAuthenticated = true;
        state.user = { email: foundUser.email };
        state.error = null;
      } else {
        state.isAuthenticated = false;
        state.user = null;
        state.error = "Invalid email or password";
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
