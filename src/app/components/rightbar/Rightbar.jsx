import React from 'react'
import Styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <div className={Styles.bgContainer}>
          <Image src={"/rocket.png"} alt='' fill className={Styles.bg} />
        </div>
        <div className={Styles.texts}>
          <span className={Styles.notification}>🔥 Available Now</span>
          <h3 className={Styles.title}>How to use Next.js 14 with Admin Dashboard?</h3>
          <span className={Styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={Styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima placeat tenetur nemo est mollitia, possimus beatae sit hic, saepe ratione, at cum vel nesciunt? Dolore laudantium similique labore dolorum?
          </p>
          <button className={Styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      <div className={Styles.item}>
        <div className={Styles.texts}>
          <span className={Styles.notification}>🔥 Available Now</span>
          <h3 className={Styles.title}>How to use Next.js 14 with Admin Dashboard?</h3>
          <span className={Styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={Styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima placeat tenetur nemo est mollitia, possimus beatae sit hic, saepe ratione, at cum vel nesciunt? Dolore laudantium similique labore dolorum?
          </p>
          <button className={Styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar