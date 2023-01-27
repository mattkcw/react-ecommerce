import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'

const Navbar = () => {
  let oldScrollY = 0;
  const [scrollUp, setScrollUp] = useState(true);
  const navigate = useNavigate();

  const scrolllDirection = () => {
    if(window.scrollY > oldScrollY) {
      setScrollUp(false);
    } else {
      setScrollUp(true);
    }
    oldScrollY = window.scrollY;
  }

  useEffect(() => {
    window.addEventListener('scroll', scrolllDirection);
    return () => {
      window.removeEventListener('scroll', scrolllDirection);
    };
  },[]);



  return (
    <div className={`flex p-4 justify-between items-center text-white bg-transparent w-full ${scrollUp ? 'fixed top-0' : ''}`}>
      <Link to="/" className='text-3xl font-bold text-[#7289da]'>ecommerce</Link>
      <nav className='flex'>
        <ul className='flex'>
          <li className='p-3'>
					  <Link to="/">HOME</Link>
				  </li>
          <li className='p-3'>
					  <Link to="/products">PRODUCTS</Link>
				  </li>
				  <li className='p-3'>
					  <Link to="/counter">COUNTER</Link>
				  </li>
				  <li className='p-3'>
					  <Link to="/testpage">TESTPAGE</Link>
				  </li>
			  </ul>
        <div className='p-1 hover:cursor-pointer'>
          <BsCart2 size={36} onClick={() => navigate("/cart")} />  
        </div>
		  </nav>
    </div>
  )
}

export default Navbar