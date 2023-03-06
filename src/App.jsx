// import logo from './logo.svg';
import { useEffect, useState} from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'


import * as armyService from './services/armyService.js'
import * as authService from './services/authService.js'
import Landing from './pages/Landing/Landing.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import AddArmy from './pages/AddArmy/AddArmy.jsx';
import Army from './pages/Army/Army.jsx';


function App() {
  const [user, setUser] = useState(authService.getUser())
  const [armies, setArmies] = useState([])
  const navigate = useNavigate()

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  useEffect(() => {
    const fetchArmy = async () => {
        const armyList = await armyService.getArmy()
        setArmies(armyList)
    }
    if (user) fetchArmy()
  }, [user])

  const handleAddArmy = async (formData) => {
    const newArmy = await armyService.createArmy(formData)
    console.log(newArmy)
    navigate('/loveArmy')
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

        <Route path="/loveArmy" 
          element={
            <Army 
              armies={armies}
            />
          } 
        />

        <Route path="/loveArmy/new" 
          element={
            <AddArmy 
              handleAddArmy={handleAddArmy}
            />
          }
        />

      </Routes>
    </>
  );
}

export default App;