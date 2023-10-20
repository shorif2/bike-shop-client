import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Root from './Root';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/LogIn/Register';
import MyCart from './Pages/MyCart/MyCart';
import Contact from './Pages/Contact/Contact';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import AuthProvider from './AuthProvider';
import PrivetRouter from './Pages/PrivetRouter/PrivetRouter';
import Brand from './Pages/Brand/Brand';
import View from './Pages/View/View';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/brand')
      },
      {
        path: '/add-product',
        element: <AddProduct></AddProduct>

      },
      {
        path:'/update-product/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: '/log-in',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/my-cart',
        element: <PrivetRouter><MyCart></MyCart></PrivetRouter>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/brand/:brand',
        element: <Brand></Brand>,
        loader: ({params})=> fetch(`http://localhost:5000/brand/${params.brand}`)

      },

      {
        path: '/view/:id',
        element: <View></View>,
        loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
