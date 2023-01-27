import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    // cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartItems: [],
    totalQuantity: 0,
    subTotalAmount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productIndex = state.cartItems.findIndex((product) => product.productId === action.payload.productId);
            if (productIndex >= 0) {
                state.cartItems[productIndex].cartQuantity += 1
                toast(`Added ${action.payload.name} to cart`, {
                    position: toast.POSITION.TOP_RIGHT
                })
            } else {
                const prd = {...action.payload, cartQuantity: 1};
                state.cartItems.push(prd);
                toast(`Added ${action.payload.name} to cart`, {
                    position: toast.POSITION.TOP_RIGHT
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        getSubTotal: (state, action) => {
            let { subtotal, totalQuantity } = state.cartItems.reduce((cartSubTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const sum = price * cartQuantity;
                cartSubTotal.subtotal += sum;
                cartSubTotal.totalQuantity += cartQuantity;
                return cartSubTotal
            }, {subtotal: 0, totalQuantity: 0});

            state.subTotalAmount = (subtotal / 100).toFixed(2);
            state.totalQuantity = totalQuantity;
        }
    }
})

export const { addToCart, getSubTotal } = cartSlice.actions
export default cartSlice.reducer