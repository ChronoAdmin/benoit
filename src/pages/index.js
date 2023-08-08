import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../../components/Header";
import Header_sns from "../../components/Header_sns";
import Fv from "../../components/Fv";
import MainHero from "../../components/MainHero";
import Title from "../../components/Title";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Loop from "../../components/Loop";
import Section3 from "../../components/Section3";
import Cta_fixed from "../../components/Cta_fixed";

export default function Home() {
  return (
    <>
      {/* <Header />
      <Header_sns />
      <Fv /> */}
      <MainHero />
      <Fv />
      <Loop />
      <Cta_fixed />
      <div className={styles.main}>
        <video src="/mainBg.mp4" autoPlay loop muted />
        <Title />
        <Section1 />
        <div className={styles.sections}>
          <Section2 />
          <Section3 />
        </div>
      </div>
    </>
  );
}
