import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Cadastro from './Components/Cadastro/Cadastro'

import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Dashboard/></div>
  },
  {
    path: '/Login',
    element: <div><Login/></div>
  },
  {
    path: '/Cadastro',
    element: <div><Cadastro/></div>
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
