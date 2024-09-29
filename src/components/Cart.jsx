import React from 'react'
import { useShopping } from '../context'
import CartItems from './CartItems';



const Cart = () => {
  let {items, getRduceItems} = useShopping();
  return (
    <>
      <h3 style={{color:"#bb3333"}}>Your Cart (<span>{getRduceItems}</span>)</h3>
      {items.map((item)=> (
          <CartItems {...item} key={item.id} />
      ))}
       
    </>
  )
}

export default Cart
