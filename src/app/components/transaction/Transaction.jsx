import React from "react";
import Styles from "./transaction.module.css";
import Image from "next/image";
const Transaction = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Latest Transactions</h2>
      <table className={Styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={Styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt="username"
                  width={40}
                  height={40}
                  className={Styles.userImage}
                />
                <span>John Doe</span>
              </div>
            </td>
            <td>
              <div className={`${Styles.status} ${Styles.pending}`}>
                pending
              </div>
            </td>

            <td>24/12/2000</td>
            <td>&#x20B9; 10000</td>
          </tr>
          <tr>
            <td>
              <div className={Styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt="username"
                  width={40}
                  height={40}
                  className={Styles.userImage}
                />
                Raj Kumar
              </div>
            </td>
            <td>
              <div className={`${Styles.status} ${Styles.cancelled}`}>
                cancelled
              </div>
            </td>

            <td>24/12/2000</td>
            <td>&#x20B9; 10000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
