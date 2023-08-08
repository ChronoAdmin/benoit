import React from "react";
import styles from "@/styles/Header_sns.module.css";
import Link from "next/link";

const Header_sns = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <Link className={styles.fancy} href="#">
          <span class={styles.top_key}></span>
          <span class={styles.text}>電話で相談</span>
          <span class={styles.bottom_key_1}></span>
          <span class={styles.bottom_key_2}></span>
        </Link>
        <Link className={styles.fancy} href="#">
          <span class={styles.top_key}></span>
          <span class={styles.text}><span className={styles.line}>LINE</span>で予約</span>
          <span class={styles.bottom_key_1}></span>
          <span class={styles.bottom_key_2}></span>
        </Link>
      </div>
    </div>
  );
};

export default Header_sns;
