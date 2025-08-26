import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Company from './pages/Company'
import AboutDetail from './pages/AboutDetail'
import CompanyDetail from './pages/CompanyDetail'


function App() {

  return (
    <div>
      <h1>라우터 실습</h1>
      <nav>
        <NavLink to="/home">홈</NavLink> ||
        < NavLink to="/about">소개</ NavLink> ||
        < NavLink to="/company">회사</ NavLink>

      </nav>


      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
          <Route path='/about/:id' element={<AboutDetail />} />
        <Route path='/company' element={<Company />} />
        <Route path='/company/:id' element={<CompanyDetail />} />
        <Route path='*' element={<Notfound />} />
      </Routes>


    </div>
  )
}

export default App