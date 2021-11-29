import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Image from '../Image/Image'
import NotFound from '../404/NotFound'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/imagen/:width/" element={<Image />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default Main
