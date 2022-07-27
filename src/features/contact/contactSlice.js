import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []
}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact(state, { payload }) {
            state.data = [...state.data, payload];
        },
    },
})

export const { addContact } = contactSlice.actions
export default contactSlice.reducer