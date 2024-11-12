import About from "./Pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./Layout/Rootlayout";
import Products from "./Pages/Products";
import Pricing from "./Pages/Pricing";
import ContactLayout from "./Layout/ContactLayout";
import Location from "./Components/Location";
import ContactUs from "./Components/ContactUs";
import Notfound from "./Components/Notfound";
import AllProducts, { productsLoader } from "./Components/AllProducts";
import SingleProduct, { singleProductLoader } from "./Components/SingleProduct";
import Error from "./Components/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      children: [
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <Products />,
          children : [
            {
              index : true ,
              element : <AllProducts/>,
              loader : productsLoader,
              errorElement : <Error/>
            },
            {
              path : ":id" ,
              element: < SingleProduct/>,
              loader : singleProductLoader,
              errorElement : <Error/>
            }
          ]
        },
        {
          path: "contact",
          element: <ContactLayout />,
          children : [
            {
              path: "location",
              element: <Location />,
            },
            {
              path: "contactus",
              element: <ContactUs />,
            }
            
          ]
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
      ],
    },
    {
      path : "*",
      element : <Notfound/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
