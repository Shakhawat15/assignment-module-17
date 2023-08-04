import {configureStore} from "@reduxjs/toolkit";
import todoReducer from '../state/todo/todoSlice';
import messageReducer from "../state/message/messageSlice";

export default configureStore({
    reducer: {
        todo: todoReducer,
        message: messageReducer
    }
});