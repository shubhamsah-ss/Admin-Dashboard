import React from "react";
import Styles from "./users.module.css";
import Search from "@/app/components/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/components/pagination/Pagination";
import { fetchUsers } from "@/app/_lib/utils/data";


const Users = async({ searchParams }) => {

  const q = searchParams?.q || ""
  const page = searchParams?.page || 1

  const { count, users } = await fetchUsers(q, page)



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
          {
            users.map((user) =>
            <tr key={user._id}>
            <td>
              <div className={Styles.user}>
                <Image src={user.img || "/noavatar.png"} alt="" width={75} height={75} className={Styles.userImage} />
              {user.username}
              </div>
            </td>
            <td>{user.email}</td>
            <td>{user.createdAt?.toString().slice(4,16)}</td>
            <td>{user.isAdmin ? "Admin" : "Client"}</td>
            <td>
              {user.isActive ? "Active" : "Passive"}
            </td>
            
            <td>
              <div className={Styles.buttons}>
                <Link href={`/dashboard/users/${user._id}`}>
                <button className={`${Styles.button} ${Styles.view}`}>View</button>
                </Link>
                <Link href={`/dashboard/users/${user._id}`}>
                <button className={`${Styles.button} ${Styles.delete}`}>Delete</button>
                </Link>
              </div>
            </td>
            
          </tr>
            )
          }
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Users;
