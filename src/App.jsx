import { BrowserRouter, Routes,Route } from 'react-router-dom'
import DashBoard from "./DashBoard"
import Login from './Login'

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
