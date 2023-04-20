import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './indexStyle.css'

import App from './App'
import ErrorPage from './components/error/ErrorPage'
import Contact from './components/contact/Contact'
import { loader as rootLoader } from './components/navbar/Navbar'
import { action as rootAction } from './components/navbar/HeaderSearch'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />
      }
    ]
  }
])
const root = createRoot(document.getElementById('app'))
root.render(<RouterProvider router={router} />)
