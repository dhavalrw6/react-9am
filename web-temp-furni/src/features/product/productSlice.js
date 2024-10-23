import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/productsData";

const initialState = {
    products: products,
    cart: [],
    netTotal: 0,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => { },
        removeCart: (state, action) => { }
    }
})


export const { addToCart, removeCart } = productSlice.actions;

export default productSlice.reducer;