import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    status: 'empty',
    list: []
};

export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async () => {
        const resp = await fetch('http://localhost:3333/categories/all');
        const data = await resp.json();
        return data
        
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchCategory.fulfilled, (state, {payload}) => {
                state.status = 'ready'
                state.list = payload
                
            })
            .addCase(fetchCategory.rejected, (state) => {
                state.status = 'error'
            })
    }
})

export default categorySlice.reducer;