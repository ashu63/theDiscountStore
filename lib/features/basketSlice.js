import {createSlice} from "@reduxjs/toolkit"
import { distance } from "framer-motion";

const initialState = {
    items :[],
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers : {
        // addToBasket : (state, action) => {
        //     state.items = [...state.items,action.payload]
        // },
        addToBasket : (state, action) => {
            const existingProduct = state.items.find(
                (item) => item.id === action.payload.id
            );
            if(existingProduct){
                existingProduct.quantity += action.payload.quantity
            }else{
                state.items.push(action.payload)
            }
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.items.find((item) => item.id === action.payload.id
            );
            existingProduct && existingProduct.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.items.find((item) => item.id === action.payload.id
            );
            if(existingProduct?.quantity === 1){
                existingProduct.quantity = 1
            }
            else{
                existingProduct.quantity --;
            }
        },


        removeFromBasket:(state,action) => {
            state.items = state.items.filter(
                (item)=>item.id !== action.payload
            );
        },

    }
})

export const {addToBasket,removeFromBasket, increaseQuantity, decreaseQuantity} = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

// export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price ,0)
export const selectTotal = (state) => state.basket.items.reduce((total, item) => 

{


  let discountantPrice = (item.price / 100) * item.discount;
  let totalDiscountantPrice = item.price - discountantPrice

    if(item.discount){
        if(item.quantity === 1 ){
            return total + totalDiscountantPrice

        }
        else{
            return total + totalDiscountantPrice * item.quantity
        }
    }
    else {
       return total + item.price * item.quantity

    }

}, 0)

export default basketSlice.reducer;