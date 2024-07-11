import React, {useState } from 'react'

export const CartDataContext = React.createContext()

function CartDataComponent ({children}){

    const [cart, setCart] = useState(0)

    return <>
        <CartDataContext.Provider value={{cart, setCart}}>
            {children}
        </CartDataContext.Provider>
    </>
}

export default CartDataComponent