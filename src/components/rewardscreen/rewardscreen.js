import React, {createRef, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styles from "./rewardscreen.scss";

// let bsVisible = false;
function RewardScreen() {

  const bsRef = createRef(false);
  const [bsVisible, setBsVisible] = useState(false);

	function bsHandler() {
    if(!bsVisible) {
      bsRef.current.classList.add(styles['show-bs']);
    } else {
      bsRef.current.classList.remove(styles['show-bs']);
    }
    setBsVisible(!bsVisible);
		console.log("BS");
  }
  
  useEffect(() => {
    document.addEventListener('click', () => {
      if(bsVisible) {
        bsRef.current.classList.remove(styles['show-bs']);
        setBsVisible(!bsVisible);
      }
    })
  });

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["button"]}>
        <Link className={styles["back"]} to={"/cred/home"}></Link>
      </div>
      <div className={styles["main"]}>
        <img
          className={styles["img"]}
          src={`/cred/images/cred/wrapper_final.png`}
        />
      </div>
      <div className={styles["main-scroll"]}>
				<div className={styles['content-button']}>
					<div className={styles["bs"]} onClick={bsHandler}></div>
				</div>
        <div className={styles["container"]}>
          <img className={styles["img"]} src={`/cred/images/cred/scroll.png`} />
        </div>
      </div>
			<div className={styles['bs-wrapper']} ref={bsRef}>
				<div className={styles['bs']}>
					<img className={styles["img"]} src={`/cred/images/cred/bs_final.png`} />
				</div>
			</div>
    </div>
  );
}

export default RewardScreen;
