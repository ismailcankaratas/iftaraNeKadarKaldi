import { configureStore } from "@reduxjs/toolkit";
import namazVakitleriSlice from "./features/namazVakitleriSlice";

export const store = configureStore({
    reducer: {
        namazVakitleriSlice,
    },
})