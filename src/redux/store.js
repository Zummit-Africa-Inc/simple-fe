import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/features/user/userSlice'
import apiReducer from '../redux/features/api/apiSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        apis: apiReducer
    }
})