import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/login">
        Login
      </Link>
    </header>
  )
}

export default Header
