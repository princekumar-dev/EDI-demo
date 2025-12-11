import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Prototype from './pages/Prototype'
import About from './pages/About'
import Contact from './pages/Contact'
import AgeSelection from './pages/AgeSelection'
import KidsDashboard from './pages/dashboards/KidsDashboard'
import TeenDashboard from './pages/dashboards/TeenDashboard'
import CollegeDashboard from './pages/dashboards/CollegeDashboard'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-50">
        <Routes>
          {/* Main Website Routes */}
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/features" element={
            <>
              <Navbar />
              <Features />
              <Footer />
            </>
          } />
          <Route path="/prototype" element={
            <>
              <Navbar />
              <Prototype />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          } />
          
          {/* Age Selection and Dashboard Routes */}
          <Route path="/get-started" element={<AgeSelection />} />
          <Route path="/dashboard/kids" element={<KidsDashboard />} />
          <Route path="/dashboard/teen" element={<TeenDashboard />} />
          <Route path="/dashboard/college" element={<CollegeDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App