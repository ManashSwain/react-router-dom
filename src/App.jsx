import About from './Pages/About'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Rootlayout from './Layout/Rootlayout';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout/>,
      children : [
        {
          path: "about",
          element: <About/>,
        },
      ]
    },
  
  ]);
  

  return (
    <>
   <RouterProvider router={router} />
       </>
  )
}

export default App
