import React from "react";
import Card from "../components/card/Card";
import Styles from "./dashboard.module.css";
import Rightbar from "../components/rightbar/Rightbar";
import Transaction from "../components/transaction/Transaction";
import Chart from "../components/chart/Chart";

const Dashboard = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.main}>
        <div className={Styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={Styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
