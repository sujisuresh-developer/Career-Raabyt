
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Coming from './Coming'
import Careers from './Careers'


function App() {
 
  return (
    <>
   <Routes>
    <Route path="/" element={<Coming />} />
  
  
    <Route path="/careers" element={<Careers />} />
   </Routes>

     
    </>
  )
}

export default App
