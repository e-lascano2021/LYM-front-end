// import logo from './logo.svg';
import { useEffect, useState} from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'


import * as armyService from './services/armyService.js'
import * as authService from './services/authService.js'
import Landing from './pages/Landing/Landing.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import AddSoldier from './pages/AddSoldier/AddSoldier.jsx';
import Army from './pages/Army/Army.jsx';


function App() {
  const [user, setUser] = useState(authService.getUser())
  const [army, setArmy] = useState([])
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
        const armyData = await armyService.getArmy()
        setArmy(armyData)
    }
    if (user) fetchArmy()
  }, [user])

  const handleAddSoldier = async (formData) => {
    const newSoldier = await armyService.createSoldier(formData)
    setArmy([...army, newSoldier])
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
              army={army}
            />
          } 
        />

        <Route path="/loveArmy/new" 
          element={
            <AddSoldier 
              handleAddSoldier={handleAddSoldier}
            />
          }
        />

      </Routes>
    </>
  );
}

export default App;