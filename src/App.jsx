import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import CookData from './Components/CookData/CookData'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cooks, setCooks] = useState([])
  const [cooking, setCooking] = useState([]);

  const handleCook = (cook) => {
    const isExist = cooks.find((c) => c.id == cook.id)
    if (!isExist) {
      setCooks([...cooks, cook])
    }
    else {
      toast.error("Don't Double click")
    }
  }

  const handleCooking = (cookItem, id) => {
    setCooking([...cooking, cookItem])
    // remove preparing cook
    const remainingCook = cooks.filter(cook => cook.id !== id)
    setCooks(remainingCook)
  }

  return (
    <>
      <div className='lg:w-11/12 md:w-11/12 w-full mx-auto lg:px-0 md:px-0 px-1 space-y-8'>
        <Header></Header>
        <Banner></Banner>
        <div>
          <div className='flex flex-col items-center space-y-4'>
            <h1 className="text-center lg:text-4xl md:text-4xl text-2xl font-semibold">Our Recipes</h1>
            <p className="max-w-2xl text-center text-[#150B2B99] text-base font-normal">Welcome to the world of recipes full of tests, You will find food here beyond imagination.So what's the delay come with your well wisher</p>
          </div>
        </div>
        {/* recipe & cook */}
        <div className='flex lg:flex-row flex-col p-2 lg:gap-4 md:gap-3 gap-1'>
          <div className='lg:w-3/5 w-full'>
            <Recipes handleCook={handleCook}></Recipes>
          </div>
          <div className='lg:w-2/5 w-full border-2 rounded-2xl'>
            <CookData
              cooks={cooks}
              handleCooking={handleCooking}
              cooking={cooking}
            ></CookData>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
