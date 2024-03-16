import './App.css'
import Banner from './Components/Banner/Banner'
import CookData from './Components/CookData/CookData'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'

function App() {

  return (
    <>
      <div className='lg:w-11/12 md:w-11/12 w-full mx-auto lg:px-0 md:px-0 px-1 space-y-8'>
        <Header></Header>
        <Banner></Banner>
        <div>
          <div className='flex flex-col items-center space-y-4'>
            <h1 className="text-center lg:text-4xl md:text-4xl text-2xl font-semibold">Our Recipes</h1>
            <p className="max-w-2xl text-center">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.</p>
          </div>
        </div>
        {/* recipe & cook */}
        <div className='flex lg:flex-row flex-col p-2 lg:gap-4 md:gap-3 gap-1'>
          <div className='lg:w-3/5 w-full'>
            <Recipes></Recipes>
          </div>
          <div className='lg:w-2/5 w-full border-2 rounded-2xl'>
            <CookData></CookData>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
