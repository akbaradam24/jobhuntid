import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function login() {
  return (
    <div>
      <main className={styles.mainContainer}>
      <div className={styles.left}>
        <Image src="/jobHuntid.png" width={50} height={20} alt="login" quality={100}/> 
      </div>
      <div className={styles.fromContainer}>
        <form className={styles.forminput}>
          <p>Halo !</p>
          <p>Silahkan masukkan data di bawah ini</p>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <button>Masuk</button>
          <p>Belum punya akun? <Link href="/register">Daftar Sekarang</Link></p>
        </form>
      </div>
      </main>
    </div>
  )
}
