import React from 'react'
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import Register from './components/Register'

function App() {
  const navigate = useNavigate
  const [user, setUser] = useState("")
  const [pwd, setPwd] = useState("")

  const [email, setEmail] = useState("")
  const [fullname, setFullname] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    e.preventDefault()
  }

  const handleRegistration = () => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} pwd={pwd} setPwd={setPwd} handleLogin={handleLogin}/>}/>
        <Route path="/register" element={<Register email={email} setEmail={setEmail} fullname={fullname} setFullname={setFullname} username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleRegistration={handleRegistration}/>}/>
        <Route path="/landingpage" element={<LandingPage/>}/>
      </Routes>
    </div>
  )
}

export default App
