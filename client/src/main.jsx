import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import RootLayout from './layouts/rootLayout/RootLayout'
import Dashboard from './routes/dashboard/Dashboard';
import Homepage from './routes/homepage/Homepage';
import ChatPage from './routes/chatPage/ChatPage';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';
import SignInPage from './routes/signingPage/SigningPage'
import SignUpPage from './routes/signupPage/SignupPage'




const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children:[
      {path:"/",element:<Homepage/>},
      {path:"/sign-in/*",element:<SignInPage/>},
      {path:"/sign-up/*",element:<SignUpPage/>},


      {element:<DashboardLayout/>,
        children:[
          {path:"/dashboard",element:<Dashboard/>},
          {path:"/dashboard/chats/:id",element:<ChatPage/>}
        ]}
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
