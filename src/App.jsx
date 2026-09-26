
import About from './pages/About'
import Footer from './component/Footer'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Skill from './pages/Skills'
import Projects from './pages/Project'
import Contact from './pages/Contact'
import Education from './pages/Education'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:
      <>
      <Navbar/>
      <Home/>
      <Footer/>
      </>
    },
    {
      path:"/About",
      element:
      <>
      <Navbar/>
      <About/>
      <Footer/>
      </>
    },
    {
      path:"/Education",
      element:
      <>
      <Navbar/>
      <Education/>
      <Footer/>
      </>
    },
    {
      path:'/Skills',
      element:
      <>
      <Navbar/>
      <Skill/>
      <Footer/>
      </>
    },
    {
      path:"/Projects",
      element:
      <>
      <Navbar/>
      <Projects/>
      <Footer/>
      </>
    },
    {
      path:"/Contact",
      element:
      <>
      <Navbar/>
      <Contact/>
      <Footer/>
      </>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App