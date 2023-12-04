"use client"
import React from 'react'
import Styles from './navbar.module.css'
import { usePathname } from 'next/navigation'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'


const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <h2>{pathname.split("/").pop()}</h2>
      </div>
      <div className={Styles.menu}>
        <div className={Styles.search}>
          <MdSearch />
          <input type="text" placeholder='Search' className={Styles.input} />
        </div>
        <div className={Styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar