import './App.css'
import { Header} from './components/Header';
import { Body} from './components/Body'
import { About } from './components/About';
import {createBrowserRouter,Outlet} from "react-router-dom";
import { Cart } from './components/Cart';
import { Error } from './components/Error';
import { RestaurantMenu } from './components/RestaurantMenu';
import { Provider } from 'react-redux';
import { appStore } from './components/utils/appStore';

function App() {

  return (
    <>
      <Provider store={appStore}>
      <Header/>
      <Outlet/>
      </Provider>
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
        path:"/cart",
        element:<Cart/>
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
