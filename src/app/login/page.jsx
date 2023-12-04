import React from 'react'
import Styles from './login.module.css'
const Login = () => {
  return (
    <div className={Styles.container}>
      <form className={Styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login