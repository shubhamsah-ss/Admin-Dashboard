import React from "react";
import Styles from "./users.module.css";
import Search from "@/app/components/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/components/pagination/Pagination";
const Users = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <Search placeholder={"Search user"} />
        <Link href={"/dashboard/users/add-user"}>
          <button className={Styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={Styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={Styles.user}>
                <Image src={"/noavatar.png"} alt="" width={75} height={75} className={Styles.userImage} />
              Rahul Jakar
              </div>
            </td>
            <td>Rahul.jakar@example.com</td>
            <td>{new Date().toISOString()}</td>
            <td>Client</td>
            <td>
              active
            </td>
            <td>
              <div className={Styles.buttons}>
                <Link href={`/dashboard/users/`}>
                <button className={`${Styles.button} ${Styles.view}`}>View</button>
                </Link>
                <Link href={`/dashboard/users/`}>
                <button className={`${Styles.button} ${Styles.delete}`}>Delete</button>
                </Link>
              </div>
            </td>
            
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Users;
