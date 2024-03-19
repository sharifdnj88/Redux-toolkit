import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all users data from api
export const fetchAllUserData = createAsyncThunk("user/fetchAllUserData", async () => {
    const response = await axios.get("http://localhost:5050/users");
    return response.data;
});

// Delete User
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
    await axios.delete(`http://localhost:5050/users/${id}`);
    return id;
});

// Create User
export const createUser = createAsyncThunk("user/createUser", async (data) => {
    const response =  await axios.post(`http://localhost:5050/users`, data);
    return response.data;
});