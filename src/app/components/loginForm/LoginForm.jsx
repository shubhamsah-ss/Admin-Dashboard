"use client"
import { authenticate } from '@/app/_lib/utils/action'
import Styles from './loginForm.module.css'
import React, { useState } from 'react'

const LoginForm = () => {

    const [error, setError] = useState()

    const handleLogin = async(formData) => {
        const data = await authenticate(formData)

        if(data.error) setError(data.error)
    }
  return (
    <form action={handleLogin} className={Styles.form}>
    <h1>Login</h1>
    <input type="text" name='username' id='username' placeholder='Username' />
    <input type="password" name='password' id='password' placeholder='Password' />
    <button type='submit'>Login</button>
    {error && error}
  </form>
  )
}

export default LoginForm