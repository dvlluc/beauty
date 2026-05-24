import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './pages/LandingPage'
import ImpactPage from './pages/ImpactPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import DashboardPage from './pages/DashboardPage'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* Public routes without navbar */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            
            {/* Routes with navbar and footer */}
            <Route path="/" element={
              <>
                <Navbar />
                <LandingPage />
                <Footer />
              </>
            } />
            <Route path="/impact" element={
              <>
                <Navbar />
                <ImpactPage />
                <Footer />
              </>
            } />
            <Route path="/services" element={
              <>
                <Navbar />
                <ServicesPage />
                <Footer />
              </>
            } />
            <Route path="/dashboard" element={
              <>
                <Navbar />
                <DashboardPage />
              </>
            } />
            
            {/* Placeholder routes - to be implemented */}
            <Route path="/professionals" element={
              <>
                <Navbar />
                <div className="min-h-screen pt-16"><h1>Professionals Page - Coming Soon</h1></div>
              </>
            } />
            <Route path="/styles" element={
              <>
                <Navbar />
                <div className="min-h-screen pt-16"><h1>Styles Gallery - Coming Soon</h1></div>
              </>
            } />
            <Route path="/favorites" element={
              <>
                <Navbar />
                <div className="min-h-screen pt-16"><h1>Favorites - Coming Soon</h1></div>
              </>
            } />
            <Route path="/profile" element={
              <>
                <Navbar />
                <div className="min-h-screen pt-16"><h1>Profile - Coming Soon</h1></div>
              </>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
