import { Outlet } from "react-router-dom"


const Products = () => {
  return (
  <>
  <h1 className="text-center text-3xl">View all Products</h1>
  <Outlet/>
  </>
  )
}

export default Products
