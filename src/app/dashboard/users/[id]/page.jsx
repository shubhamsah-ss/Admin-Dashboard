import React from "react";
import Styles from "./viewUser.module.css";
import Image from "next/image";
const ViewUser = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.infoContainer}>
        <div className={Styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        <h2>John Doe</h2>
      </div>
      <div className={Styles.formContainer}>
       <form className={Styles.form}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="John Doe"
          />
  
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="John_Doe@email.com"
          />
  
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
          />
  
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" placeholder="+195412555" />
  
          <label htmlFor="address">Address</label>
          <textarea
            type="text"
            name="address"
            id="address"
            placeholder="New York"
          />
  
          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
  
          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <button type="submit">Update</button>
       </form>
      </div>
    </div>
  );
};

export default ViewUser;
