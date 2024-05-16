import { createBrowserRouter } from "react-router-dom"
import Layout from "./templates/Layout"
import Home from "./pages/Home"
import About from "./pages/About"

const App = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/About',
        element: <About />
      }
    ]
  },

])

export default App
