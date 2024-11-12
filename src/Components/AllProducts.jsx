/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";


const AllProducts = () => {
    const products = useLoaderData();
  return (
    <>
    
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="p-4 allproducts">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={product.image}
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {product.category}
            </h3>
            <Link to={product.id.toString()}><h2 className="text-gray-900 title-font text-lg font-medium">
              {product.title}
            </h2>
            </Link>
            <p className="mt-1">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    
    </>
  )
}

export const productsLoader = async ()=>{
  const products = await fetch("https://fakestoreapi.com/products");
  if(!products.ok){
    throw  Error("An error occured while fetching the product!")
  }
  return products.json();
}

export default AllProducts



