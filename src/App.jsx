import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './redux/slices/productsSlice'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Counter from './components/pages/Counter'
import Testpage from './components/pages/Testpage'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import ProductsPage from './components/pages/ProductsPage'
import CartPage from './components/pages/CartPage'
import { getSubTotal } from './redux/slices/cartSlice'
import CheckoutPage from './components/pages/CheckoutPage'

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  
  dispatch(getSubTotal());
  return (
    <>
    <ToastContainer autoClose={800} />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/testpage" element={<Testpage />} />
    </Routes>
    </>
  )
}

export default App
