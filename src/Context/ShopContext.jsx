import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);
const ShopContextProvider =(props) => {
    const  context_value={all_product};
    return(
        <ShopContext.Provider value={context_value}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider