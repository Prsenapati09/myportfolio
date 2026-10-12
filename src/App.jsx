
import About from './pages/About'
import Footer from './component/Footer'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Skill from './pages/Skills'
import Projects from './pages/Project'
import Contact from './pages/Contact'
import Education from './pages/Education'
import WhatappButton from './component/Whatsappbutton'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:
      <>
      <Navbar/>
      <Home/>
      <WhatappButton/>
      <Footer/>
      </>
    },
    {
      path:"/About",
      element:
      <>
      <Navbar/>
      <About/>
      <WhatappButton/>
      <Footer/>
      </>
    },
    {
      path:"/Education",
      element:
      <>
      <Navbar/>
      <Education/>
      <WhatappButton/>
      <Footer/>
      </>
    },
    {
      path:'/Skills',
      element:
      <>
      <Navbar/>
      <Skill/>
      <WhatappButton/>
      <Footer/>
      </>
    },
    {
      path:"/Projects",
      element:
      <>
      <Navbar/>
      <Projects/>
      <WhatappButton/>
      <Footer/>
      </>
    },
    {
      path:"/Contact",
      element:
      <>
      <Navbar/>
      <Contact/>
      <WhatappButton/>
      <Footer/>
      </>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App