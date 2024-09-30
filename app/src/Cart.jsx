import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {removeItemFromCart} from './store'
const Cart = () => {

    const dispatch=useDispatch()
    const cartItems=useSelector((state) => state.cart.cartItems)
    const totalQuantity=useSelector((state) => state.cart.totalQuantity)
    const totalPrice=useSelector((state) => state.cart.totalPrice)
    

    const removeItemHandler=(id) =>{
        dispatch(removeItemFromCart(id))
    }



  return (
    <div className='App'>
       <h2>Your Cart</h2>
       <p>Total Items:{totalQuantity}</p>
       <p>Total Price: {totalPrice}</p>
       <ul>
        {cartItems.map((item) =>(
            <li key={item.id}>
                {item.title} - {item.quantity} x ${item.price} = ${item.totalPrice}
               <button onClick={() => removeItemHandler(item.id)}>Remove</button>
            </li>
        ))}
       </ul>
    </div>
  )
}

export default Cart
