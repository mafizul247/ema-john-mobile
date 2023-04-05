import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import cartProductsLoader from './Loader/CartProductLoader';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element: <Order></Order>,
        loader: cartProductsLoader
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '*',
        element: <h1 >Page not found</h1>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
