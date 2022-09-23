import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function register() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.left}>
        <Image src="/jobHuntid.png" width={50} height={20} alt="login" quality={100}/> 
      </div>
      <div className={styles.fromContainer}>
        <form className={styles.forminput}>
          <p>Selamat Datang!</p>
          <p>mulai perjalanan karirmu bersama JobHunt.id</p>
          <input type="text" placeholder="Put your name"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <button>Daftar</button>
          <p>Sudah punya akun? <Link href="/login">Masuk Sekarang</Link></p>
        </form>
      </div>
      </main>
  )
}
