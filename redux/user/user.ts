import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

const URL = `${BASE_URL}/users`;

type CurrentUserState = {
  id: number;
  name: string;
  email: string;
  isLoggedIn: boolean;
  message: string;
};

const initialState: CurrentUserState = {
  id: 0,
  name: "",
  email: "",
  isLoggedIn: false,
  message: "",
};

export const login = createAsyncThunk(
  "user/login",
  async ({ name, password }: { name: string; password: string }, thunkAPI) => {
      const res = await axios.post(`${URL}/login`, { name, password });
      return res.data
  }
);

export const signup = createAsyncThunk(
  "user/signup",
  async (
    {
      name,
      email,
      password,
    }: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    const res = await axios.post(`${URL}/signup`, { name, email, password });
    return res.data;
  }
);

const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    logout: (state) => {
      state.id = 0;
      state.name = "";
      state.email = "";
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      return {...action.payload, message: 'success', isLoggedIn: true};
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.message = action.payload.message;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
