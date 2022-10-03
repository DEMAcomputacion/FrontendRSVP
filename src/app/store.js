import { configureStore } from '@reduxjs/toolkit'
import rsvpSlice from '../features/rsvp/rsvpSlice.js';

const store = configureStore({
  reducer: {
    rsvp: rsvpSlice,
  }
})

export default store;