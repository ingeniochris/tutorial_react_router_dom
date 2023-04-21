import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './indexStyle.css'

import App from './App'
import ErrorPage from './components/error/ErrorPage'
import Contact, { loader as contactLoader } from './components/contact/Contact'
import { loader as rootLoader } from './components/navbar/Navbar'
import { action as rootAction } from './components/navbar/HeaderSearch'

import EditContact, { action as editAction } from './components/contact/EditContact'

import { action as destroyAction } from './components/contact/destroyContact'

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
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editAction
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
        errorElement: <h1>Oops! There was an error.</h1>
      }
    ]
  }
])
const root = createRoot(document.getElementById('app'))
root.render(<RouterProvider router={router} />)
