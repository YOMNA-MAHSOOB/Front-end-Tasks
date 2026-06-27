import './App.css'
import { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { Product } from './Product'
import productImage from './assets/download.jfif'
import watch from './assets/download (1).jfif'
import watchPic from './assets/download 22.jfif'


function App() {

  return(
    <div className='container'>
    
     <Product name="Vintage Floral Watch" image={productImage} price="200$" 
      rating={ <>
      <FaStar color="gold"  /> 5
      </>
       } btnStatus="Buy Now"/>
      
    <Product name="Classic Silver Watch" image={watch} price="350$"  rating={ <>
      <FaStar color="gold"  /> 4.5
      </>
       } btnStatus="Add to Cart"/>

    <Product name="Luxury Gold Watch" image={watchPic} price="250$"  rating={ <>
      <FaStar color="gold"  /> 4
      </>
       } btnStatus="Out of Stock"/>
   
 
    </div>
  )
  
}

export default App
