import React from 'react'
import styles from '@/styles/cta_fixed.module.css'
import Link from 'next/link'
import {FaLine} from "react-icons/fa"
import {GrMail} from "react-icons/gr"

const Cta_fixed = () => {
  return (
    <div className={styles.wrap}>
        <div className={styles.contact}>
            <Link href="#">
                <FaLine />
                お試しコース
            </Link>
            <Link href="#">
                <GrMail />
                フルコース
            </Link>
        </div>
    </div>  
  )
}

export default Cta_fixed