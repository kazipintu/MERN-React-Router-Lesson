import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Layout/Main'
import Home from './components/Home/Home'
import About from './components/About/About'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>,
      }
    ]
  },
  {
    path:"*",
    element: <NotFound></NotFound>
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App
