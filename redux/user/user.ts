import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://192.168.175.172:8000/api/users";


type CurrentUserState = {
    id: number
    name: string;
    email: string;
    isLoggedIn: boolean;
    message: string
};

const initialState: CurrentUserState = {
    id: 0,
    name: "",
    email: "",
    isLoggedIn: false,
    message: ''
};

export const login = createAsyncThunk(
  "user/login",
  async ({ name, password }: { name: string; password: string }, thunkAPI) => {
    const res = await axios.post(`${URL}/login`, { name, password });
    return res.data;
  }
);

export const signup = createAsyncThunk(
    "user/signup",
    async ({ name, email, password }: { name: string; email: string; password: string }, thunkAPI) => {
      const res = await axios.post(`${URL}/signup`, { name, email, password });
      return res.data;
    }
);


const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
      state.isLoggedIn = true
      state.message = 'Login Successfully'
      console.log(state);
    });
    builder.addCase(signup.fulfilled, (state, action) => {
        state.name = action.payload.name
        state.email = action.payload.email
        state.message = action.payload.message
        console.log(state);
      });
  },
});

export default userSlice.reducer;
