import React from 'react'
import styles from '@/styles/header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <>
        <div className={styles.wrap}>
            <div className='wp4'>
                <div className={styles.header}>
                    <h1>BenoitPorte</h1>
                    <p>Esthetic</p>
                    <Image src="/logo-removebg.png" height={300} width={300} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header