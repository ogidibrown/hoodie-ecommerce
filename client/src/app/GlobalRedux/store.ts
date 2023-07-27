'use client';
import React from 'react'
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './sidebarSlice'


export function makeStore() {
    return configureStore ({
        reducer: {
            sidebar:sidebarReducer
        }
    })
}

export const store = makeStore()
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch