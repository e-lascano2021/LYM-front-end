// import logo from './logo.svg';
import { useState} from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'
// import './App.css';


import * as authService from './services/authService'
import Landing from './pages/Landing/Landing.jsx';
import NavBar from './components/NavBar/NavBar';


function App() {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()


  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  return (
    <>
      {
        user &&
        <NavBar handleLogout={handleLogout}/>
      }
      <Routes>
        <Route path="/" element={<Landing handleSignupOrLogin={handleSignupOrLogin}/>} />
      </Routes>
    </>
  );
}

export default App;
