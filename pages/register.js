import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'
export default function register() {
  const [nama, setNama] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const submit = async (e ) => {
    e.preventDefault();
    const namas={
      namas: nama
    }
    console.log(namas);
    router.push('/profil');

  }
  return (
    <main className={styles.mainContainer}>
      <div className={styles.left}>
        <Image src="/jobHuntid.png" width={50} height={20} alt="login" quality={100}/> 
      </div>
      <div className={styles.fromContainer}>
        <form onSubmit={submit} className={styles.forminput}>
          <p>Selamat Datang!</p>
          <p>mulai perjalanan karirmu bersama JobHunt.id</p>
          <input type="text" onChange={e => setNama(e.target.value) } placeholder="Put your name"></input>
          <input type="email" onChange={e => setEmail(e.target.value) } placeholder="email"></input>
          <input type="password" onChange={e => setPassword(e.target.value)} placeholder="password"></input>
          <button type="submit" onClick={e=> submit(e)}>Daftar</button>
          <p>Sudah punya akun? <Link href="/login">Masuk Sekarang</Link></p>
        </form>
      </div>
      </main>
  )
}
