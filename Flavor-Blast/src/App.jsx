import './App.css'
import { Header} from './components/Header';
import { Body} from './components/Body'
import { About } from './components/About';
import {createBrowserRouter,Outlet} from "react-router-dom";
import { Contact } from './components/Contact';
import { Error } from './components/Error';
import { RestaurantMenu } from './components/RestaurantMenu';

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

 export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element: <Body/>

      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
      },

    ],
    errorElement:<Error/>
  },
  
])

export default App
