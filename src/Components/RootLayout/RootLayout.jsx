import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import ScrollToTop from './ScroolToTop'

function RootLayout() {
  return (
    <div>
        <ScrollToTop/>
        <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default RootLayout
