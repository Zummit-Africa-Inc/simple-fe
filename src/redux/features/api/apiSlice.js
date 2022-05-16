import { createSlice } from '@reduxjs/toolkit'

import { Apis } from '../../../dummyApi'

const initialState = {
    apis: Apis,
    isLoading: true
}

const apiSlice = createSlice({
    name: 'apis',
    initialState,
    reducers: {}
})

export const { getSingleApi } = apiSlice.actions
export default apiSlice.reducer