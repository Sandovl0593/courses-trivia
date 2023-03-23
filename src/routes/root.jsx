import { createBrowserRouter } from 'react-router-dom'
import AppMain from '../App'
import Graduates from '../components/graduates'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppMain />
  }, {
    path: "/graduates",
    element: <Graduates />
  }
]);

export default router;