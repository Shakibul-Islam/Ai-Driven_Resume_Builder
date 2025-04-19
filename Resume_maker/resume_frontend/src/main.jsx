import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,  Route, Routes } from 'react-router'

import About from "./pages/About";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Services from './pages/Services';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<Root />} >
          <Route path = "home" element = {<Home />} />
          <Route path = "about" element = {<About/>} />
          <Route path = "services" element = {<Services/>} />

        </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
