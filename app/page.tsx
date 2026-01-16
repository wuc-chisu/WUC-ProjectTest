'use client'

import Link from 'next/link'
import styles from './home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Savory Haven</h1>
          <p>Experience fine dining at its finest</p>
          <Link href="/about" className={styles.ctaButton}>
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className={styles.highlights}>
        <div className={styles.container}>
          <h2>Why Choose Savory Haven?</h2>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.icon}>👨‍🍳</div>
              <h3>Expert Chefs</h3>
              <p>Our award-winning culinary team crafts exceptional dishes with precision and passion.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.icon}>🌱</div>
              <h3>Fresh Ingredients</h3>
              <p>We source locally from trusted suppliers to ensure the highest quality ingredients.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.icon}>✨</div>
              <h3>Elegant Ambiance</h3>
              <p>Dine in our sophisticated setting, perfect for special occasions and memorable evenings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to dine with us?</h2>
          <p>Discover the full story behind Savory Haven</p>
          <Link href="/about" className={styles.primaryButton}>
            Visit Our About Page
          </Link>
        </div>
      </section>
    </main>
  )
}
