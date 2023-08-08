import React from "react";
import styles from "@/styles/section2.module.css";
import Image from "next/image";
import Cta from "./Cta";

const Section2 = () => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>なぜここまで効果が出るのか？</h2>
      <h3>3つの強み</h3>
      <div className={styles.point}>
        <div className={styles.item}>
          <h4>月4回のリンパ流し</h4>
          <div className={styles.contents}>
            <div className={styles.txt}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facere, aspernatur!
              </p>
            </div>
            <div className={styles.img}>
              <Image src="/massage.jpg" height={150} width={150} />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <h4>ボディメイクをサポートするサプリメント</h4>
          <div className={styles.contents}>
            <div className={styles.txt}>
              <p>
                食事の前にトリプルカッターグランプロを飲むことで、食事中に摂取した「油」・「炭水化物」「糖」をカット！
                まさに「食べなかった」ことにしてくれる
              </p>
            </div>
            <div className={styles.img}>
              <Image src="/supplement.png" height={150} width={150} />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <h4>食べても大丈夫な食事管理</h4>
          <div className={styles.contents}>
            <div className={styles.txt}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facere, aspernatur!
              </p>
            </div>
            <div className={styles.img}>
              <Image src="/eats.jpg" height={150} width={150} />
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
};

export default Section2;
