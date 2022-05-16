import { createSlice } from '@reduxjs/toolkit'

import { Apis } from '../../../dummyApi'

const initialState = {
    apis: Apis
}

const apiSlice = createSlice({
    name: 'apis',
    initialState,
    reducers: {}
})

export default apiSlice.reducer