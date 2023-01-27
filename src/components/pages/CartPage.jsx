import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CartItem from '../CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { getSubTotal } from '../../redux/slices/cartSlice'
import CheckoutForm from "../CheckoutForm";

const CartPage = () => {

  const navigate = useNavigate();
  const cartItemList = useSelector((state) => state.cart.cartItems);
  const cartSubtotal = useSelector((state) => state.cart.subTotalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubTotal());
  }, [cartItemList])


  return (
    <div className='w-full py-[10rem] px-4 bg-mountains bg-no-repeat bg-cover bg-center h-[120vh]'>
	    <div className='py-12'>	

      <div className='max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl'>
        <div className='md:flex '>
          <div className='w-full p-4 px-5 py-5'>
          <div className='md:grid md:grid-cols-3 gap-2 '>
      <div className='col-span-2 p-5'>
            <h1 className='text-xl font-medium'>Shopping Cart</h1>
            {cartItemList.length ? cartItemList.map((item, i) => (
              <CartItem item={item} key={i} />)) : <div>cart is empty</div>}
            
            <div className="flex justify-between items-center mt-6 pt-6 border-t"> 
              <div className="flex items-center hover:cursor-pointer" onClick={() => navigate("/products")}>
                <FaArrowAltCircleLeft color='#3b82f6' size={20}/>
                <span className="text-md pl-2 font-medium text-blue-500">Continue Shopping</span>
              </div>
            
              {cartItemList.length ? 
                <div className="flex justify-center items-end">
                  <span className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>
                  <span className="text-lg font-bold text-gray-800">${cartSubtotal}</span>
                  {console.log(cartItemList.subTotalAmount)}
                </div> : null			
              
              }
	
            </div>
          </div>
            <button onClick={() => navigate("/checkout")} className="bg-[#61c487] h-[100px] w-[200px] rounded-full font-bold text-lg mx-auto py-3 my-auto">Checkout</button>
          </div>
          </div>
          
        </div> 
      </div>
      </div>
  </div>
  )
}

export default CartPage