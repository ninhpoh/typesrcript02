import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import numberReducer from '../slices/numberSlice';
import themeReducer from '../slices/themeSlice';
import viewReducer from '../slices/viewSlice';
import menuReducer from '../slices/menuSlice';
import languageReducer from '../slices/languageSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        numbers: numberReducer,
        theme: themeReducer,
        view: viewReducer,
        menu: menuReducer,
        language: languageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;