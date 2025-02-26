import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../src/shared/sections/Navbar/Navbar'
import Home from './pages/Home'
import Habilidades from './pages/Habilidades'
import SobreMi from './pages/SobreMi'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <Toaster richColors />

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/habilidades" element={<Habilidades></Habilidades>} ></Route>
        <Route path="/sobremi" element={<SobreMi></SobreMi>} ></Route>
        <Route path='/proyectos' element={<Proyectos></Proyectos>}></Route>
        <Route path='/contacto' element={<Contacto></Contacto>}></Route>
        <Route path='/*' element={<Navigate to={'/'} />}></Route>
      </Routes>
    </>
  )
}

export default App
