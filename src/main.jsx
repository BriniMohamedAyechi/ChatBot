import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'

import Dashboard from './routes/dashboard/Dashboard';
import Homepage from './routes/homepage/Homepage';
import ChatPage from './routes/chatPage/ChatPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <Homepage/>
  },
  {

      children:[{path:"/dashboard",element:<Dashboard/>}
        ,{path:"dashboard/chats/:id",element:<ChatPage/>}
      ],

    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
