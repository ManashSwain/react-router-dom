
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const Rootlayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <div className="footer  w-full ">
    <Footer/>
    </div>
    
    </>
  )
}

export default Rootlayout
