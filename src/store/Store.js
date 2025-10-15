'use client';

import {configureStore} from "@reduxjs/toolkit"
import isOpenReducer from "./isOpen"

export const store = configureStore ({
    reducer : {
        isOpen : isOpenReducer,
    }
})