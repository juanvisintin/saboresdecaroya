import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Inicio from './components/Paginas/Inicio/Inicio.jsx';
import Productos from './components/Paginas/Productos/Productos.jsx';
import Pie from './components/Pie.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/productos' element={<Productos />}></Route>
      </Routes>
      <Pie />
    </BrowserRouter>
  )
}
