import React from 'react'
import './Offers.css'
import exclucive_image from '../Assets/exclusive_image.png'
 const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclucive</h1>
            <h1>Offers for you</h1>
             <p>ONLY ON BEST SELLER PRODUCT</p>
             <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclucive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers