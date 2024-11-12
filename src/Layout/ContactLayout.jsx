import { Outlet, useNavigate } from "react-router-dom"


const ContactLayout = () => {

    const navigate = useNavigate();
  return (
    <>
    <div className="container flex justify-center w-full">
    <button className="text-white bg-indigo-500 border-0 m-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{navigate('location')}}>Location</button>
    <button className="text-white bg-indigo-500 border-0 m-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{navigate('contactus')}}>Contact Us</button>
    </div>
    <Outlet/>
    </>
  )
}

export default ContactLayout
