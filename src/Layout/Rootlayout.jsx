
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const Rootlayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <div className="footer relative bottom-0  w-full ">
    <Footer/>
    </div>
    
    </>
  )
}

export default Rootlayout
