import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';

export const rsvps = createAsyncThunk('nn', async () => {
        return fetch('https://backend-rsvp-david-morales.herokuapp.com/rsvp')
        .then((resp) => resp.json())
        .catch((err) => console.log(err))
 })

const rsvpSlice = createSlice({
    name: 'rsvpList',
    initialState: {},
    extraReducers:{
        [rsvps.pending]: (state) =>{
            state.isLoading = true;
        },
        [rsvps.fulfilled]: (state, action) =>{
            state.isLoading = false;
            state.listadoRsvp = action.payload;
        },
        [rsvps.rejected]: (state) =>{
            state.isLoading = false;
        }
        }
    })

export default rsvpSlice.reducer;