import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import ScrollToTop from './ScroolToTop'
import FloatingWhatsAppButton from './FloatingWhatsAppButton'

function RootLayout() {
  return (
    <div>
        <ScrollToTop/>
        <Header/>
      <main>
        <Outlet/>
      </main>
      <FloatingWhatsAppButton/>
      <Footer/>
    </div>
  )
}

export default RootLayout
