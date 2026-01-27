
import About from './component/About'
import Footer from './component/Footer'
import Home from './component/Home'
import Navbar from './component/Navbar'
import {createBrowserRouter,RouterProvider} from 'react-router'
// import Skills from './component/Skills'
import Skill from './component/Skills'
import Projects from './component/Project'
import Contact from './component/Contact'
import Education from './component/Education'

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