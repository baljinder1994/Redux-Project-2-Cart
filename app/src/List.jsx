import React from 'react'
import {addItemToCart} from './store'
import {useDispatch} from 'react-redux'
const List = () => {

    const dispatch = useDispatch()

    const addToCartHandler=(item)=>{
       
        dispatch(addItemToCart(item))
    }

    const Dummy=[
        {
            id:'pr1',title:'Product 1',price:100
        },
        {
            id:'pr2',title:'Product 2',price:200
        },
    ]
  return (
    <div className='App'>
       <h2>Products</h2>
       <ul>
        {Dummy.map((item) =>(
            <li key={item.id}>
                {item.title} - ${item.price}
                <button onClick={() => addToCartHandler(item)}>Add To Cart</button>
            </li>
        ))}
       </ul>
    </div>
  )
}

export default List
