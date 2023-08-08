import React from "react";
import styles from "@/styles/section1.module.css";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className={styles.wrap} id="about">
      <h2 className={styles.title}>
        最短<span>1ヶ月</span>のダイエットコースで効果を実感
      </h2>
      <div className={styles.beforeAfter}>
        <div className={styles.before}>
          <Image src="/before.png" height={200} width={200} />
          <p>before</p>
        </div>
        <div className={styles.after}>
          <Image src="/before.png" height={200} width={200} />
          <p>after</p>
        </div>
      </div>
      <div className={styles.beforeAfter}>
        <div className={styles.before}>
          <Image src="/before2.png" height={200} width={200} />
          <p>before</p>
        </div>
        <div className={styles.after}>
          <Image src="/before2.png" height={200} width={200} />
          <p>after</p>
        </div>
      </div>
      <div className={styles.beforeAfter}>
        <div className={styles.before}>
          <Image src="/before3.png" height={200} width={200} />
          <p>before</p>
        </div>
        <div className={styles.after}>
          <Image src="/before3.png" height={200} width={200} />
          <p>after</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
