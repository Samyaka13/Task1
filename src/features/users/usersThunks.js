import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk('users/fetchUsers',async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    return response.json();

})