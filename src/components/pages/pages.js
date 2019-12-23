import React from "react";
import Screen from "../screen/screen";

import styles from "./pages.scss";
import Homescreen from "../screen/homescreen";

function Pages({ match }) {
  const obj = {
    '/cred/search': { img: "1", back: "/cred/product" },
    '/cred/browse': { img: "2", back: "/cred/search" },
    '/cred/product': { img: "3", back: "/cred/browse" }
  };
	
	const namelist = match.url;
	console.log("M: ", match, namelist, obj[name]);
  if (namelist === '/cred' || namelist === '/cred/') {
    return (
      <div className={styles["container"]}>
        <Homescreen />
      </div>
    );
  }
  const name = match.url;
  console.log("M: ", match, name, obj[name]);
  return (
    <div className={styles["container"]}>
      <Screen screenID={obj[name]} />
    </div>
  );
}

export default Pages;
