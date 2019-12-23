import React from "react";
import {Link} from 'react-router-dom';
import styles from "./screen.scss";

function Screen({ screenID }) {

	function backHandler() {

	}

  return (
    <div className={styles["wrapper"]}>
			<div className={styles['button']}>
				<Link className={styles['back']} to={screenID.back}></Link>
				{/* <div className={styles['back']} onClick={backHandler}></div> */}
			</div>
      <img className={styles["img"]} src={`/images/${screenID.img}.png`} />
    </div>
  );
}

export default Screen;
