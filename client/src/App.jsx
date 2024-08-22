import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Dashboard from './Components/Dashboard.jsx'
import axios from 'axios'

function App() {

  const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:5000/api/users")
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      alert(error)
    })
  }

  useEffect(() => {
      fetchAPI()
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
