import React from 'react'
import Styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.logo}>
            DEVSS
        </div>
        <div className={Styles.texts}>
        &#169; All rights reserved
        </div>
    </div>
  )
}

export default Footer