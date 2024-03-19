import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        msg: "",
        error: ""
    },
    reducers: {
        increment: (state, { type, payload }) => {
            state.count = state.count +1;
        },
        decrement: (state, { type, payload }) => {
            if (state.count > 0) {
                state.count = state.count -1;                
            }else{
                state.count = 0;
            }
        },
        reset: (state, { type, payload }) => {
            state.count = 0;
            state.msg = "Count reset Done";
        },
        ot: (state, { type, payload }) => {
            state.count = payload;
            state.msg = "done done";
            state.error = "Sabdhane thaiken";
        },
    }
});

export const { increment, decrement, reset, ot } = CounterSlice.actions;

export default CounterSlice.reducer;