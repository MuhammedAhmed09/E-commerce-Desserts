import { createContext, useContext, useState } from "react";


const Shopping = createContext({});

const ShoppingProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  
    
    const getItems = (id) => {
        return items.find((item) => item.id === id)?.quantity || 0 ;
    };

    const increaseQu = (id) => {
        setItems((currentItems) => {
            if (currentItems.find((item) => item.id === id) == null){
                return [...currentItems, {id, quantity: 1}];                
            }else{
                return currentItems.map((item) => {
                    if(item.id === id) {
                        return{...item, quantity: item.quantity + 1}
                    }else{
                        return item;
                    }
                })
            };
        })
    };

    const decreaseQu = (id) => {
        setItems((currentItems) => {
            if(currentItems.find((item) => item.id === id) == null){
                return currentItems.filter((item) => item.id !== id);
            }else{
                return currentItems.map((item) => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item;
                    }
                })
            };
        }) 
    };

    const removeItem = (id) => {
        setItems((currentItems) => currentItems.filter((item) => item.id !== id))
    }

    //reduce items
    const getRduceItems = items.reduce((quantity, item) => item.quantity + quantity, 0);
  
  return (
    <Shopping.Provider value={{items, getItems, increaseQu, decreaseQu, removeItem, getRduceItems}}>
      { children }
    </Shopping.Provider>
  )
}

export default ShoppingProvider;

export const useShopping = () => {
    return useContext(Shopping)
}
