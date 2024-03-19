import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/CounterSlice";
import ToDoReducer from "../features/ToDo/ToDoSlice"; 
import UserReducer from "../features/User/UserSlice"; 
import StudentReducer from "../features/Student/StudentSlice"; 
import StudentMiddleware from "./StudentMiddleware";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: ToDoReducer,
        user: UserReducer,
        student: StudentReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(StudentMiddleware);
    },
    devTools: true
});

export default store;