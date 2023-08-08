import React from "react";
import styles from "@/styles/Fv.module.css";
import Image from "next/image";

const Fv = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <Image
            src="/logo-removebg.png"
            height={200}
            width={200}
            alt="BenoitPorteのlogo(背景透過)"
          />
        </div>
        <nav className={styles.internalLinks}>
          <ul>
            <li>
              <a href="#about">効果</a>
            </li>
            <li>
              <a href="#about">悩み</a>
            </li>
            <li>
              <a href="#about">コース内容</a>
            </li>
            <li>
              <a href="#about">値段</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Fv;
