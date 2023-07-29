import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },

    reducers:{
        addItem: (state,action) => {
            state.items.push(action.payload);
            console.log(current(state.items));
        },
        removeItem: (state,action) => {
            const indextoDelete= state.items.findIndex((item)=> item.card.info.id === action.payload)
            state.items.splice(indextoDelete,1);
        },

        clearCart : (state) => {
            state.items.length=0;
        },
    },

});

export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;