import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Info from './components/Info.jsx'
import Error from './components/Error.jsx'
import Single from './components/Single.jsx'
import Products from './components/Products.jsx'
import Pro from './components/Pro.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
  },
  {
    path:"/info",
    element: <Info />
  },
  {
    path:"*",
    element: <Error />
  },
  {
    path:"/post/:id",
    element: <Single />
  },
  {
    path:'/products',
    element:<Products />
  },
  {
    path:'/products/:id',
    element:<Pro />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
