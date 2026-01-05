import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CapturaPage from './pages/CapturaPage'
import CalculadoraPage from './pages/CalculadoraPage'
import ResultadoPage from './pages/ResultadoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CapturaPage />} />
        <Route path="/calculadora" element={<CalculadoraPage />} />
        <Route path="/resultado" element={<ResultadoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
