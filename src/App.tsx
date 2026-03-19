import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './LandingPage/Landingpage.tsx'
import Catalog from './Catalog/Catalog.tsx'
import Eventspage from './EventsPage/Eventspage.tsx'
import Faqpage from './FAQ/Faqpage.tsx'
import Gympage from './GymPage/Gympage.tsx'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />}/>
          <Route path="/catalog" element={<Catalog />}/>
          <Route path="/evenimente" element={<Eventspage />}/>
          <Route path="/faq" element={<Faqpage />}/>
          <Route path="/sala" element={<Gympage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
