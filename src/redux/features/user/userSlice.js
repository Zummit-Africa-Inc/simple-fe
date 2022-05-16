import { createSlice } from '@reduxjs/toolkit'

import { User} from '../../../dummyUser'

const initialState = {
    user: User
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: state => {
            state.user = {}
        },
    }
})

export const { logout } = userSlice.actions
export default userSlice.reducer