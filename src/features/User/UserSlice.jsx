import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, fetchAllUserData } from "./UserApi";

// initialState
const initialState = {
    users: [],
    loading: false,
    msg: null,
    error: null
};

// Create User Slice
export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllUserData.pending, (state, { type, payload }) => {
            state.loading = true;
        }).addCase(fetchAllUserData.fulfilled, (state, { type, payload }) => {
            state.loading = false;
            state.users = payload;
        }).addCase(fetchAllUserData.rejected, (state, { type, payload }) => {
            state.loading = false;
        }).addCase(deleteUser.fulfilled, (state, { type, payload }) => {
            state.users = state.users.filter((data) => data.id !== payload);
            state.loading = false;
        }).addCase(deleteUser.pending, (state, { type, payload }) => {
            state.loading = true;
        }).addCase(deleteUser.rejected, (state, { type, payload }) => {
            state.loading = false;
        }).addCase(createUser.fulfilled, (state, { type, payload }) => {
            state.users.push(payload);
        });
    }
});


// export Slice Selectors
export const getAllUserData = (state) => state.user;

// export Slice actions
const {} = UserSlice.actions;

// export User Slice
export default UserSlice.reducer;