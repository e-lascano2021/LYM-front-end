// import logo from './logo.svg';
import { useState} from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css';


import * as authService from './services/authService'
import Landing from './pages/Landing/Landing';


function App() {
  const [user, setUser] = useState(authService.getUser())
  


  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }



  return (
    <>
      <Routes>
        <Route path="/" element={<Landing handleSignupOrLogin={handleSignupOrLogin}/>} />
      </Routes>
    </>
  );
}

export default App;
