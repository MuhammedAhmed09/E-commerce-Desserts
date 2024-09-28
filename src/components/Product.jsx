import React from 'react'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import formatCurrency from '../formatCurrency';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useShopping } from '../context';


const Product = ({id, image, name, category, price }) => {
  const { getItems, increaseQu, decreaseQu, removeItem } = useShopping();
  let quantity = getItems(id);
  
  return (
    <div className='allProduct'>
      <div className='imgWithCart'>
        <img src={image.desktop} alt={name} loading='lazy' />
        {quantity === 0 ? (
          <button id='addToCartBtn' onClick={() => increaseQu(id)}><span><MdOutlineAddShoppingCart></MdOutlineAddShoppingCart></span>Add to Cart</button>
        ):(
          <div className='decreaseQuantity'>
            <button  onClick={() => decreaseQu(id)}><IoIosRemoveCircleOutline/></button>
            <span>{quantity}</span>
            <button  onClick={() => increaseQu(id)}><IoIosAddCircleOutline/></button>
          </div>
        )}
                    
        
      </div>
      <p className='paragraph-city'>{category}</p>
      <h5>{name}</h5>
      <b style={{color: '#bb0000'}}>{formatCurrency(price)}</b>
    </div>
  )
}
 
export default Product
