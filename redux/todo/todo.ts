import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://192.168.175.172:8000/api/todos";
// 192.168.1.84

export type Todo = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  userId: number;
};

const initialState: Todo[] = [];

export const getTodos = createAsyncThunk(
  "todo/fetchData",
  async (userId: number, thunkAPI) => {
    const res = await axios(`${URL}/${userId}`);
    return res.data;
  }
);

export const addTodo = createAsyncThunk(
  "todo/add",
  async ({ title, description,userId}: { title: string; description: string; userId: number },thunkAPI) => {
    const res = await axios.post(URL, {title, description, userId})
    return res.data
  }
);

export const deleteTodo = createAsyncThunk('todo/delete', async(todoId: number, thunkAPI) => {
    const res = await axios.delete(`${URL}/${todoId}`)
    console.log(res.data);
    return { todoId, data: res.data };
} )

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
        return [...state, action.payload];
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
        const {todoId} = action.payload
        return state.filter((todo) => todo.id !== todoId);
    });
  },
});

export default todoSlice.reducer;
