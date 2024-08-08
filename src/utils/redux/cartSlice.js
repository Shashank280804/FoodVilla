import { createSlice } from "@reduxjs/toolkit";

//creating the cart slice for handling cart items, actions(addItems, removeItems, clearCart)
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems : (state, action) => {
            //Redux ToolKit uses immer library behind the scenes
            state.items.push(action.payload);
        },
        removeItems : (state, action) => {
            state.items.pop();
        },
        clearCart : (state, action) => {
            /*
            RTK - either mutate the existing  state or return a new State
            Method 1 => state.items.length = 0; // originalState = []
            */

            //Method 2 => this new object will be replaced inside originalState = { items: [] }
            return {items: []};
        }
    }
})

//exporting the actions
export const {addItems, removeItems, clearCart} = cartSlice.actions;

export default cartSlice.reducer;//exporting the reducers