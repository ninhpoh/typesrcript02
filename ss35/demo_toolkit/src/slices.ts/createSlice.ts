import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value:number;
}

const counter : CounterState ={
    value: 0,
}

const