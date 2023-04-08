import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://192.168.1.84:8000/api/users";


export type CurrentUserState = {
    name: string;
    email: string;
    isLoggedIn: boolean;
};

const initialState: CurrentUserState = {
    name: "",
    email: "",
    isLoggedIn: false,
};

export const login = createAsyncThunk(
  "user/login",
  async ({ name, password }: { name: string; password: string }, thunkAPI) => {
    const res = await axios.post(`${URL}/login`, { name, password });
    return res.data;
  }
);

const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.isLoggedIn = true
      console.log(state); 
    });
  },
});

export default userSlice.reducer;
