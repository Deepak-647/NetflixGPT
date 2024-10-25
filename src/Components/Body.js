import { createBrowserRouter } from "react-router-dom";
// import Header from "./Header";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Login/>
    },
    {
      path:"/browse",
      element: <Browse/>
    }
  ])
  return(
    <div>

      <RouterProvider router={appRouter}/> 
        {/* <Header/>
         
         */}
    </div>
  )
}
export default Body ;