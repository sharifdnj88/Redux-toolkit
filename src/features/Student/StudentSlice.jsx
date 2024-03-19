import { createSlice } from "@reduxjs/toolkit";

// initialState
const initialState = {
    students: [],
    loading: false,
    msg: null,
    error: null,
}

// Create Student Slice
export const StudentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        addNewStudent: {
            reducer: (state, { type, payload }) => {
                state.students.push(payload);
            },
            prepare: (data) => {
                return {
                    payload : {
                        ...data,
                        isAdmin: true,
                        status: false,
                        message: "tumi pending asoo"
                    }
                };
            },
        },
    },
    extraReducers: (builder) => {}
});



// export Selector

// export Actions
export const { addNewStudent } = StudentSlice.actions;

// export reducer
export default StudentSlice.reducer;