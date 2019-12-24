import React from "react";
import { Link } from "react-router-dom";
import styles from "./screen.scss";

function Homescreen() {
  return (
    <div className={styles["container"]}>
      <div className={styles["button"]}>
        <Link className={styles["link"]} to="/cred/reward">
          Reward
        </Link>
      </div>
    </div>
  );
}

export default Homescreen;
