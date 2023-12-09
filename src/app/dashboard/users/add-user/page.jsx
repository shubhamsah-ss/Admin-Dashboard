import React from 'react'
import Styles from './add-user.module.css'
import { addUser } from '@/app/_lib/utils/action'
const AddUser = () => {
  return (
    <div className={Styles.container}>
    <form action={addUser} className={Styles.form}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        id="username"
        required
      />

      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        required
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        required
      />

      <input
        type="phone"
        placeholder="Phone"
        name="phone"
        id="phone"
        
      />

      <select name="isAdmin" id="isAdmin" defaultValue={false}>
        <option value={false} >Is Admin?</option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>

      <select name="isActive" id="isActive" defaultValue={true}>
        <option value={true} >Is Active?</option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>

      <textarea
        name="address"
        id="address"
        rows="10    "
        placeholder="Address"
      ></textarea>
      <button type="submit" className={Styles.button}>Submit</button>
    </form>
  </div>
  )
}

export default AddUser