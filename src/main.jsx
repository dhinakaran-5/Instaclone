
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Profile from './Profile.jsx'

import ViewStory from './viewStory.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router =createBrowserRouter(
   [
    {
      path:"/",
      element: <App/>
    },
    {
      path:"/story/:id/",
      element:<ViewStory/>
    },
     {
      path:"/profile",
      element:<Profile/>
    }
   ]

)

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
 
)
