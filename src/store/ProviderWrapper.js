"use client";

import { Provider } from "react-redux";
import { store } from "@/store/Store.js";

export function ProviderWrapper({children}){
    return <Provider store={store}>{children}</Provider>
}