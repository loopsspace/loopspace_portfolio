import { useState } from 'react'
import Home from './pages/Home'
import EnquiryAdmin from './components/EnquiryAdmin'


function App() {
  // Check if admin panel should be shown
  const showAdmin = window.location.search.includes('admin=true');

  return (
    <>
      <div className="min-h-screen w-full relative bg-black">
    {/* Arctic Lights Background with Top Glow */}
    <div
      className="fixed inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 90%), #000000",
      }}
    />
  
    {showAdmin ? <EnquiryAdmin /> : <Home />}
  </div>
    </>
  )
}

export default App
