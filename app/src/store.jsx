import {configureStore,createSlice} from '@reduxjs/toolkit'

const initialState={
    cartItems:[],
    totalQuantity:0,
    totalPrice:0
};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItemToCart:(state,action)=>{
            const newItem=action.payload;
            const existingItem=state.cartItems.find(product => product.id === newItem.id )
      
          if(existingItem){
            existingItem.quantity += 1;
            existingItem.totalPrice += newItem.price;
          }else{
            state.cartItems.push({
                id: newItem.id,
                title:newItem.title,
                price:newItem.price,
                quantity:1,
                totalPrice: newItem.price
            })
          }

          state.totalQuantity += 1;
          state.totalPrice += newItem.price
        },
        removeItemFromCart:(state,action)=>{
            const id= action.payload;
            const existingItem =state.cartItems.find(product => product.id === id)

            if(existingItem){
                state.totalQuantity -= 1;
                state.totalPrice -= existingItem.price;

                if(existingItem.quantity === 1){
                    state.cartItems= state.cartItems.filter(product => product.id !== id)

                    }else{
                        existingItem.quantity -= 1;
                        existingItem.totalPrice -= existingItem.price
                    }
                }
            }
        }
    
})
export const {addItemToCart,removeItemFromCart}=cartSlice.actions

const store=configureStore({
    reducer:{cart:cartSlice.reducer}
})
export default store