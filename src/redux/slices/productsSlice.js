import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { testProductsList } from "../../assets/testdata";

const initialState = {
    items: [],
    status: null
}

export const fetchProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const { data } = await axios.get(`http://localhost:8080/product/all`);
        return data;
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "success";
            state.items = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = "rejected";
            state.items = testProductsList
        })
    }
})

// export const { increment, decrement, incrementByAmount } = productsSlice.actions
export default productsSlice.reducer