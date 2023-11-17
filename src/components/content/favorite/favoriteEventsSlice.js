import { createSlice } from '@reduxjs/toolkit';

const favoriteEventsSlice = createSlice({
    name: 'favoriteEvents',
    initialState: [],
    reducers: {
        addFavoriteEvent: (state, action) => {
            return [...state, action.payload];
        },
        removeFavoriteEvent: (state, action) => {
            return state.filter(event => event.id !== action.payload);
        },
    },
});

export const { addFavoriteEvent, removeFavoriteEvent } = favoriteEventsSlice.actions;

export default favoriteEventsSlice.reducer;