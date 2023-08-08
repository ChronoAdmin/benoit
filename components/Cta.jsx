import React from 'react'
import styles from '@/styles/cta.module.css'
import Link from 'next/link'
import {FaLine} from "react-icons/fa"
import {GrMail} from "react-icons/gr"

const Cta = () => {
  return (
    <div className={styles.wrap}>
        <div className={styles.contact}>
            <Link href="#">
                <FaLine />
                【期間限定】半額以下でコースを試す
            </Link>
        </div>
    </div>  
  )
}

export default Cta