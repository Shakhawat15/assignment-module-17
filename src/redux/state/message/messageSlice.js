import {createSlice} from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        show: false,
        text: "",
    },
    reducers: {
        showMessage: (state, action) => {
            state.show = true;
            state.text = action.payload;
        },
        hideMessage: (state) => {
            state.show = false;
            state.text = "";
        },
    },
});

export const {showMessage, hideMessage} = messageSlice.actions;
export default messageSlice.reducer;
