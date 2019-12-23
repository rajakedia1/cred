import React from "react";
import Screen from "../screen/screen";

import styles from "./pages.scss";

function Pages({ match }) {
  const obj = {
    search: {img: "1", back: '/product'},
    browse: {img: "2", back: '/search'},
    product: {img: "3", back: '/browse'}
  };
	
	const name = match.url.match(/[^/].+/)[0];
	console.log("M: ", match, name, obj[name]);
  return (
    <div className={styles["container"]}>
      <Screen screenID={obj[name]} />
    </div>
  );
}

export default Pages;
