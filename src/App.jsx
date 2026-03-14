import { Routes, Route } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import Projects from './components/Projects'
import Footer from './components/Footer'
import BacklogFlow from './pages/BacklogFlow'
import NeonBudget from './pages/NeonBudget'
import Privacy from './pages/Privacy'

function Portfolio() {
  return (
    <div className="bg-ivory font-sans antialiased">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Projects />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/backlogflow" element={<BacklogFlow />} />
        <Route path="/neonbudget" element={<NeonBudget />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </LangProvider>
  )
}
