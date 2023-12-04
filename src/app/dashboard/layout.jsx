import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import Styles from "./dashboard.module.css"
import Footer from '../components/footer/Footer'

const DashboardLayout = ({ children }) => {
  return (
    <div className={Styles.container}>
        <div className={Styles.menu}>
            <Sidebar />
        </div>

        <div className={Styles.content}>
            <Navbar />
            {children}
            <Footer />
        </div>
    </div>
  )
}

export default DashboardLayout