import { createBrowserRouter } from 'react-router' 
import AppLayout from '../components/app-layout/AppLayout'
import Home from '../router/pages/home/Home'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  }
])
  