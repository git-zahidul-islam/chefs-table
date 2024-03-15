import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <div className='lg:w-11/12 md:w-11/12 w-full mx-auto lg:px-0 md:px-0 px-1 space-y-8'>
        <Header></Header>
        <Banner></Banner>
      </div>

    </>
  )
}

export default App
