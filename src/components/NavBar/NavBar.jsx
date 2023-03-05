import { Link } from 'react-router-dom'

const NavBar = ({ handleLogout }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/loveArmy">LoveArmy</Link></li>
        <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
        <li><Link to="/changePassword">Change Password</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
