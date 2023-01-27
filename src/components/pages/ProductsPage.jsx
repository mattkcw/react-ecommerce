import React, { useEffect } from 'react'
import Product from '../Product'
import { testProductsList } from '../../assets/testdata'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getSubTotal } from '../../redux/slices/cartSlice'

const ProductsPage = () => {

  const products = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubTotal());
  }, [cartItems])

  return (
    <div className='w-full py-[10rem] px-4 bg-mountains bg-no-repeat bg-cover bg-center h-[110vh]'>
      <div className='max-w-[1600px] mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8'>
        {products.map((product, i) => (
          <Product product={product} key={i} />
        ))}
      </div>      
    </div>
  )
}

export default ProductsPage