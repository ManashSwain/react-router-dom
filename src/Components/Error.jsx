import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
    console.log(error)
    
  return (
  <>
  <h2>An Error occured while fetching</h2>
  <h2>{error.message}</h2>
  </>
  )
}

export default Error
