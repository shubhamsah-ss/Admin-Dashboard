import React from 'react'
import Styles from './add-user.module.css'
const AddUser = () => {
  return (
    <div className={Styles.container}>
    <form className={Styles.form}>
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

      <select name="isAdmin" id="isAdmin">
        <option value={false} selected>Is Admin?</option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>

      <select name="isActive" id="isActive">
        <option value={true} selected>Is Active?</option>
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