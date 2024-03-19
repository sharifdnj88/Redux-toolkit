import { createSlice } from "@reduxjs/toolkit";

export const ToDoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        msg: ""
    },

    reducers: {
        addNewTodo : (state, { type, payload }) => {
            state.todos = [...state.todos, payload];
                           // or
            // state.todos.push(payload);
        },
        deleteTodo: (state, { type, payload }) => {
            state.todos = state.todos.filter((data) => data !== payload);
        },
    },

});

export const  {addNewTodo, deleteTodo}  = ToDoSlice.actions;


export default ToDoSlice.reducer;