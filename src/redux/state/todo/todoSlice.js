import {createSlice} from "@reduxjs/toolkit";
import {TodoCompleteAlert} from "../../../components/todo/TodoCompleteAlert.js";

let nextTodoId = 1;

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: []
    },
    reducers: {
        AddTodo: (state, action) => {
            state.value.push({id: nextTodoId++, task: action.payload, completed: false});
        },
        RemoveTodo: (state, action) => {
            const idToRemove = action.payload;
            state.value = state.value.filter(item => item.id !== idToRemove);
        },
        ToggleComplete: (state, action) => {
            const id = action.payload;
            const todoItem = state.value.find(item => item.id === id);
            if (todoItem) {
                todoItem.completed = !todoItem.completed;
                if (todoItem.completed) {
                    TodoCompleteAlert()
                }
            }
        }
    }
});

export const {AddTodo, RemoveTodo, ToggleComplete} = todoSlice.actions;
export default todoSlice.reducer;
