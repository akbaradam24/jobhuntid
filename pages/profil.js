import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Profil.module.css'

export default function profil({dataLocations}) {
  console.log(dataLocations)
  return (
    <>
    <div className={styles.NavbarContainer}>
      <div className={styles.imageNavbar}>
        <Image src="/icon.png" width={40} height={20} alt="login" quality={100}/>
        <Image src="/jobHuntid.png" width={70} height={20} alt="login" quality={100}/>
      </div>
      <div>
        <p>
          Data Pegawai
        </p>
      </div>
      <div>
        <Link href="/">Keluar</Link>
      </div>
    </div>
    <div >
      <div className={styles.container}>
        <p>Informasi Pribadi</p>
        <button> + </button>
      </div>
      <div className={styles.container}>
        <p>Riwayat Pendidikan</p>
        <button> + </button>
      </div>
      <div className={styles.container}>
        <p>Sertifikasi</p>
        <button> + </button>
      </div>
    </div>
    </>
  )
}

export async function getStaticProps(){
  const response = await fetch('https://permata-test-api.herokuapp.com/api/v1/data_kota');
  const dataLocations= await response.json();
  return {
    props:{
      dataLocations,
    }
  }
}