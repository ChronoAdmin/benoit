import React from "react";
import styles from "@/styles/Title.module.css";
import {IoIosArrowDropdown} from "react-icons/io"

const Title = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.txt}>
          <h1>自由なダイエット始めませんか？</h1>
          <p>夏に向けての激痩せコースが今なら半額以下</p>
        </div>
        <div className={styles.icon}>
          <span>scroll</span>
          <IoIosArrowDropdown />
        </div>
      </div>
    </>
  );
};

export default Title;
