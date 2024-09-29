import React from 'react';
import data from '../data.json';
import formatCurrency from '../formatCurrency';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useShopping } from '../context';


const CartItems = ({id, quantity}) => {

  let {removeItem} = useShopping();

    const items = data.find((i) => i.id === id);
    if (items == null) {
        return null;
    }
  return (
    <>
    <div className='box-product' style={{ marginBottom: "30px"}}>
    {quantity > 0 && (
      <>
        <div>
          <div><h5>{items.name}</h5></div>
          <div className='box-product-price'>
            <p>
              <span style={{ color: "#bb3333", fontWeight: '650' }}>
                x{quantity}
              </span>
            </p>
            <p>@{formatCurrency(items.price)}</p>
            <p style={{ fontWeight: '650' }}>{formatCurrency(items.price * quantity)}</p>
          </div>
        </div>
        <div>
          <i onClick={() => removeItem(id)} style={{ fontSize:'25px', fontWeight: '700', cursor: 'pointer' }}><IoIosCloseCircleOutline/></i>
        </div>
      </>
      )}
    </div>
    </>
  )
}

export default CartItems
