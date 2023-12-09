import React from "react";
import Styles from "./viewUser.module.css";
import Image from "next/image";
import { fetchUser } from "@/app/_lib/utils/data";
import { updateUser } from "@/app/_lib/utils/action";
const ViewUser = async({ params }) => {

  const { id } = params;
  const user = await fetchUser(id)

  return (
    <div className={Styles.container}>
      <div className={Styles.infoContainer}>
        <div className={Styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        <h2>{user.username}</h2>
      </div>
      <div className={Styles.formContainer}>
       <form action={updateUser} className={Styles.form}>
          <input type="hidden" name="id" value={id} />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder={user.username}
          />
  
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={user.email}
          />
  
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            
          />
  
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" placeholder={user.phone} />
  
          <label htmlFor="address">Address</label>
          <textarea
            type="text"
            name="address"
            id="address"
            placeholder={user.address}
          />
  
          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin" defaultValue={user.isAdmin}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
  
          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive" defaultValue={user.isActive}>
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
