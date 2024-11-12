import { useNavigate } from "react-router-dom"


const Notfound = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page not found
        </p>
        <p className="mt-4 mb-8 text-gray-600">
          The page you are looking for does not exist.
        </p>
        <button
          onClick={()=>{navigate('/')}}
          className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Go Back Home
        </button>
      </div>
    </div>
    </>
  )
}

export default Notfound
