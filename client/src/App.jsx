import { useEffect } from 'react'
import './App.css'
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
      <div className="App">
          <h1>React App</h1>
      </div>
    </>
  )
}

export default App
