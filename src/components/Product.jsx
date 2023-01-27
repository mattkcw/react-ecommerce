import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'

const Product = ({ product }) => {
  
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }
  return (
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white bg-opacity-10 transform hover:scale-110 hover:bg-opacity-50 transition duration-500 ease-in-out'>
      <h2 className='text-2xl font-bold text-center py-8'>{product.name}</h2>
      <div>
      <img className='object-cover h-64 w-96' src={`src/assets/images/products/${product.productId}.png`} alt={product.name} />
      </div>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>$ {(product.price)/100}</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className='bg-gradient-to-r from-[#87ecec] to-[#a285f1] w-36 rounded-lg font-medium mx-auto py-3 mt-6'>Add to Cart</button>
    </div>
  )
}

export default Product