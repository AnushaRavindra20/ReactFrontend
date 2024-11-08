import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
 const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {product_id}=useParams();
  const product=all_product.find((e)=>e.id===Number(product_id));
  return (
    <div>
         <Breadcrum product={product}/>
         <ProductDisplay/>
    </div>
  )
}
export default Product
