import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Profil.module.css'
export default function profil({dataLocations}) {
  const [privatelogic, setprivatelogic] = useState(false);
  const [studieslogic, setStudiesLogic] = useState(false);
  const [sertfikat, setSertfikat] = useState(false);
  
  
  const handleShowPrivate = () =>{ 
    setprivatelogic(!privatelogic);
  };
  const handleShowStudiesLogic = () =>{
    setStudiesLogic(!studieslogic);
  };
  const handleShowSertfikat = () =>{
    setSertfikat(!sertfikat);
  }

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
    <div>
      <div className={styles.container}>
        <p>Informasi Pribadi</p>
        <button onClick={handleShowPrivate}> + </button>
      </div>
      <div className={privatelogic ? styles.formContainer : styles.formContainerhide}>
        <form>
          <p> Nama Lengkap</p>
          <input type="text"></input>
          <p>Tanggal Lahir</p>
          <input type="date"></input>
          <p>Umur</p>
          <input type="number"></input>
          <p>Alamat Lengkap</p>
          <input type="text"></input>
          <p>Provinsi</p>
          <input type="dropdown"></input>
          <p>Provinsi</p>
          <input type="dropdown"></input>
        </form>
      </div>
      <div className={styles.container}>
        <p>Riwayat Pendidikan</p>
        <button onClick={handleShowStudiesLogic}> + </button>
      </div>
      <div className={styles.containerButtonTambah}>
        <button className={ studieslogic?styles.buttonTambah : styles.formContainerhide}> 
          + Tambah Riwayat Pendidikan
        </button>
      </div>
      <div className={styles.container}>
        <p>Sertifikasi</p>
        <button onClick={handleShowSertfikat}> + </button>
      </div>
      <div className={styles.containerButtonTambah}>
        <button className={ sertfikat?styles.buttonTambah : styles.formContainerhide}> 
          + Tambah Sertifikasi
        </button>
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