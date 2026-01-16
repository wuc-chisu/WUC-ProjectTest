'use client'

import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>🍽️ Savory Haven</h1>
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/">Menu</Link>
          <Link href="/">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
