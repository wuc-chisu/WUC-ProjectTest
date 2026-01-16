import styles from './about.module.css'

export default function About() {
  const team = [
    {
      name: 'Chef Marco Russo',
      role: 'Head Chef',
      bio: 'With 25 years of culinary experience, Chef Marco brings authentic Italian flavors to every dish.',
    },
    {
      name: 'Sofia Volante',
      role: 'Sous Chef',
      bio: 'Sofia specializes in contemporary plating and modern cooking techniques.',
    },
    {
      name: 'Giovanni Rossi',
      role: 'Restaurant Manager',
      bio: 'Giovanni ensures every guest experiences world-class hospitality and service.',
    },
  ]

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About Savory Haven</h1>
          <p>Discover the story behind our culinary passion</p>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Our Story</h2>
          <p>
            Founded in 2010, Savory Haven began as a small family restaurant with a dream to share authentic,
            innovative cuisine with our community. What started with a single location has grown into a beloved
            destination for food enthusiasts seeking exceptional dining experiences.
          </p>
          <p>
            Our journey is rooted in the belief that great food brings people together. We source the finest
            ingredients, employ skilled chefs, and create an atmosphere where every guest feels welcomed and valued.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className={styles.section + ' ' + styles.alternate}>
        <div className={styles.container}>
          <h2>Our Mission & Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>🌱 Sustainability</h3>
              <p>We partner with local farmers and suppliers to ensure fresh, ethically sourced ingredients while supporting our community.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>👨‍🍳 Excellence</h3>
              <p>Our commitment to culinary excellence means every dish is crafted with precision, creativity, and passion.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>❤️ Hospitality</h3>
              <p>We believe in creating warm, welcoming experiences where our guests feel like family.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>🔄 Innovation</h3>
              <p>We continuously evolve our menu and techniques to bring fresh culinary experiences to our patrons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Meet Our Team</h2>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamPlaceholder}>👤</div>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className={styles.section + ' ' + styles.alternate}>
        <div className={styles.container}>
          <h2>Awards & Recognition</h2>
          <ul className={styles.awards}>
            <li>⭐ Michelin Guide Recognition (2022-2026)</li>
            <li>🏆 Best Italian Restaurant - Local Food Awards (2023)</li>
            <li>🌟 Outstanding Service Award - Culinary Excellence Magazine (2024)</li>
            <li>🥇 Top 10 Restaurants in the Region - TripAdvisor (2024-2025)</li>
          </ul>
        </div>
      </section>

      {/* Contact Info */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Visit Us</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <h3>📍 Location</h3>
              <p>123 Culinary Lane<br />Foodie City, FC 12345</p>
            </div>
            <div className={styles.contactCard}>
              <h3>📞 Contact</h3>
              <p>Phone: (555) 123-4567<br />Email: info@savoryhaven.com</p>
            </div>
            <div className={styles.contactCard}>
              <h3>⏰ Hours</h3>
              <p>
                Mon-Thu: 11am - 10pm<br />
                Fri-Sat: 11am - 11pm<br />
                Sun: 12pm - 9pm
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
