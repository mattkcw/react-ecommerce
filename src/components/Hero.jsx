import React from 'react'
import Typed from 'typed.js'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  // Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    const options = {
    	strings: [
        'mouse',
        'speaker',
        'monitor',
        'keyboard',
        'headset',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      smartBackspace: false,
      backDelay: 1500
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className='text-white bg-laptop bg-no-repeat bg-cover bg-center bg-fixed h-[120vh]'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#66fff7] font-bold p-2'>COMPUTER PERIPHERAL SPECIALISTS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Everything computers.</h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl font-serif pb-12'>Find your perfect <span ref={el}></span></p>
        </div>
        <button className='bg-[#ff528b] w-[200px] rounded-full font-medium mx-auto py-3' onClick={() => navigate("/products")}>Explore</button>
      </div>
    </div>
  )
}

export default Hero