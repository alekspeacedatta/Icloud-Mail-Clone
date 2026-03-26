import { createBrowserRouter } from 'react-router'
import MailPage from '../../pages/MailPage'

export const router = createBrowserRouter([
  { path: '/', element: <MailPage /> },
])
