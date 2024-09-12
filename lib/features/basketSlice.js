import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    items :[],
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers : {
        addToBasket : (state, action) => {
            state.items = [...state.items,action.payload]
        },
        removeFromBasket : (state, action) => {
            const index = state.items.findIndex((basketItem) => 
                basketItem.id === action.payload.id);

            let newBaket = [...state.items]

            if(index >= 0){
                newBaket.splice(index,1)
            }else{
                console.warn("Did'nt find Product ...")
            }
            state.items = newBaket;
        },

    }
})

export const {addToBasket,removeFromBasket} = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

// export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price ,0)
export const selectTotal = (state) => state.basket.items.reduce((total, item) => 

{


  let discountantPrice = (item.price / 100) * item.discount;
  let totalDiscountantPrice = item.price - discountantPrice

    if(item.discount){
        return total + totalDiscountantPrice
    }
    else{
       return total + item.price

    }

}, 0)

export default basketSlice.reducer;