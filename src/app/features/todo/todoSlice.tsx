"use client";
import { nanoid } from "nanoid";
import { PayloadAction, CaseReducer, createSlice } from "@reduxjs/toolkit";

type TodoProps = {
  id: number | string;
  text: string;
};

type StoreData = {
  todos: TodoProps[];
};

const initialState: StoreData = {
  todos: [{ id: 1, text: "Hello world" }],
};

const reducers = {
  addTodo: (state: StoreData, action: PayloadAction<string>) => {
    const todo: TodoProps = {
      id: nanoid(),
      text: action.payload,
    };
    state.todos.push(todo);
  },
  removeTodo: (state: StoreData, action: PayloadAction<number | string>) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload);
  },
  updateTodo: (
    state: StoreData,
    action: PayloadAction<{ id: number | string; text: string }>
  ) => {
    const { id, text } = action.payload;
    const todo = state.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.text = text;
    }
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers,
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
