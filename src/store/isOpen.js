'use client';

import { createSlice } from "@reduxjs/toolkit";

const isOpenReducer = createSlice({
    name : "isOpen",
    initialState : true,
    reducers : {
        setOpen ( state,action ){
            return action.payload
        }
    }
})

export default isOpenReducer.reducer;

export let { setOpen } =isOpenReducer.actions;