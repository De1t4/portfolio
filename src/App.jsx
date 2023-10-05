import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './pages/Home'
import Habilidades from './pages/Habilidades'
import SobreMi from './pages/SobreMi'
import Proyectos from './pages/Proyectos'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/habilidades" element={<Habilidades></Habilidades>} ></Route>
        <Route path="/sobremi"element={<SobreMi></SobreMi>} ></Route>
        <Route path='/proyectos' element={<Proyectos></Proyectos>}></Route>
        <Route path='/*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
    </>
  )
}

export default App
