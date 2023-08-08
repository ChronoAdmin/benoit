import React from "react";
import styles from "@/styles/section3.module.css";

const Section3 = () => {
  return (
    <div className={styles.wrap}>
      <h2>コース内容</h2>
      <div className={styles.courses}>
        <div className={styles.course}>
          <h3>お試しコース</h3>
          <div className={styles.desc}>
            <ul>
              <li>週に１回のリンパマッサージ(１部位)</li>
              <li>サプリ提供</li>
              <li></li>
            </ul>
            <p>12,000円</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
