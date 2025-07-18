import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import './index.css'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path = "kamakhya" element = {<Home />}/>
          <Route path = "*" element = {<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
