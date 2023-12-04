import React from "react";
import Styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className={Styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={Styles.texts}>
        <span className={Styles.title}>Total Users</span>
        <span className={Styles.number}>10.273</span>
        <span className={Styles.detail}>
          <span className={Styles.positive}>12%</span>
          {" "}more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
