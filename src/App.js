// import logo from './logo.svg';
import { useState} from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'


import * as authService from './services/authService'
import Landing from './pages/Landing/Landing.jsx';
import NavBar from './components/NavBar/NavBar';
import AddArmy from './pages/AddArmy/AddArmy';


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

        <Route path="/" 
          element={
            <Landing 
              handleSignupOrLogin={handleSignupOrLogin}
            />
          } 
        />


        <Route path="/loveArmy/new" 
          element={
            <AddArmy 
            
            />
          }
        />


      </Routes>
    </>
  );
}

export default App;
