import React, {useState, createRef} from "react";
import { Link } from "react-router-dom";
import styles from "./home.scss";

function Home() {
	const showcontrolRef = createRef();
	const showbuttonRef = createRef();
  const [show, setShow] = useState(false);
  function controlHandler() {
    console.log("CC");
    if (!show) {
			showcontrolRef.current.classList.remove(styles["hide-control"]);
			showbuttonRef.current.classList.remove(styles["hide-control"]);
    } else {
			showcontrolRef.current.classList.add(styles["hide-control"]);
			showbuttonRef.current.classList.add(styles["hide-control"]);
    }
    setShow(!show);
  }

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["button"] + " " + styles["control-button"]}>
        <div className={styles["control"]} onClick={controlHandler}></div>
      </div>
      <div className={styles["home-content"]}>
        <img
          className={styles["img"]}
          src={`/cred/images/cred/home_final.png`}
        />
      </div>
      <div
        className={styles["control-content"] + " " + styles["hide-control"]}
        ref={showcontrolRef}
      >
        <img
          className={styles["img"]}
          src={`/cred/images/cred/control_final.png`}
        />
      </div>
			<div className={styles["button-nav"] + " " + styles["hide-control"]} ref={showbuttonRef}>
        <Link className={styles["back"]} to={"/cred/reward"}></Link>
      </div>
    </div>
  );
}

export default Home;
