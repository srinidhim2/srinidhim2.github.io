import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Blog from './components/Blog'
import Portfolio from './components/Portfolio'
import Upload from './components/Upload'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Portfolio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
      <Upload />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}
