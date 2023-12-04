"use client"
import React from 'react'
import Styles from './menuLinks.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLinks = ({ item }) => {
    const pathname = usePathname()
  return (
    <Link href={item.path} className={`${Styles.container} ${pathname === item.path && Styles.active}`}>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default MenuLinks