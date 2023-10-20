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
        loader: ()=> fetch('https://technology-today-server.vercel.app/brand')
      },
      {
        path: '/add-product',
        element: <PrivetRouter><AddProduct></AddProduct></PrivetRouter>

      },
      {
        path:'/update-product/:id',
        element: <PrivetRouter><UpdateProduct></UpdateProduct></PrivetRouter>,
        loader: ({params})=> fetch(`https://technology-today-server.vercel.app/product/${params.id}`)
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
        element: <PrivetRouter><MyCart></MyCart></PrivetRouter>,
        
        // loader: ({params})=> fetch(`https://technology-today-server.vercel.app/cart/${params.email}`)
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/brand/:brand',
        element: <Brand></Brand>,
        loader: ({params})=> fetch(`https://technology-today-server.vercel.app/brand/${params.brand}`)

      },

      {
        path: '/view/:id',
        element: <PrivetRouter><View></View></PrivetRouter>,
        loader: ({params})=> fetch(`https://technology-today-server.vercel.app/product/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
