import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home({ serviceSchedule }) {
  const [logoMissing, setLogoMissing] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-panel glass-card hero-card">
            <span className="eyebrow">Welcome Home</span>
            <div className="hero-brand">
              <div className="brand-mark">
                {!logoMissing ? (
                  <img
                    src="/assets/mallard-creek-logo.png"
                    alt="Mallard Creek Worship Center Logo"
                    onError={() => setLogoMissing(true)}
                  />
                ) : (
                  <div className="fallback-logo">MCWC</div>
                )}
              </div>
              <div className="brand-stack">
                <h2>Mallard Creek Worship Center</h2>
                <p className="meta-copy">Elegant worship, healing presence, Kingdom purpose.</p>
              </div>
            </div>

            <h1 className="hero-title">Welcome to Mallard Creek Worship Center</h1>
            <p className="lead">
              A place of worship, faith, healing, and transformation.
            </p>

            <div className="hero-actions">
              <Link className="btn" to="/live-streaming">
                Watch Live
              </Link>
              <Link className="btn-secondary" to="/contact">
                Plan Your Visit
              </Link>
              <Link className="btn-ghost" to="/giving">
                Give Now
              </Link>
            </div>

            <div className="stat-grid">
              <div className="stat-card">
                <span className="stat-value">Saturday</span>
                <span className="meta-copy">Worship Service at 10:30 AM</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">Tuesday + Wednesday</span>
                <span className="meta-copy">Prayer and Bible Study via conference call at 5:15 PM</span>
              </div>
            </div>
          </div>

          <div className="floating-verse glass-card">
            <span className="eyebrow">Atmosphere of Faith</span>
            <p className="verse-line">
              "Where faith is strengthened, hearts are healed, and lives are transformed through the presence of God."
            </p>
            <p className="verse-ref">Join us in worship, fellowship, and spiritual growth.</p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Welcome Message</span>
            <h2 className="section-title">A church rooted in worship and restoration</h2>
            <p className="section-copy">
              Mallard Creek Worship Center exists to create space for heartfelt worship, faithful teaching, healing,
              prayer, and Kingdom-centered community. Whether you are visiting for the first time or returning home,
              you are welcome here.
            </p>
          </div>
          <div className="grid grid-three">
            <article className="feature-card glass-card">
              <p className="card-kicker">Faith</p>
              <h3 className="card-title">Spirit-led worship</h3>
              <p className="card-copy">
                Gather in an atmosphere designed for reverence, praise, and life-changing encounters with God.
              </p>
            </article>
            <article className="feature-card glass-card">
              <p className="card-kicker">Healing</p>
              <h3 className="card-title">Prayer and encouragement</h3>
              <p className="card-copy">
                Join intercessory prayer and receive ongoing encouragement through a ministry shaped by compassion.
              </p>
            </article>
            <article className="feature-card glass-card">
              <p className="card-kicker">Transformation</p>
              <h3 className="card-title">Kingdom growth</h3>
              <p className="card-copy">
                Grow through Bible study, discipleship, and ministries that support the whole family.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container split-layout">
          <div className="split-panel glass-card">
            <span className="eyebrow">Service Times Preview</span>
            <h2 className="section-title">Worship and study throughout the week</h2>
            <ul className="list-clean">
              {serviceSchedule.map((service) => (
                <li key={service.name} className="schedule-item">
                  <div>
                    <strong>{service.name}</strong>
                    <span className="meta-copy">{service.details}</span>
                    {service.phone ? (
                      <span className="meta-copy">
                        {service.phone} | Access Code: {service.accessCode}
                      </span>
                    ) : null}
                  </div>
                  <span className="gold-text">{service.time}</span>
                </li>
              ))}
            </ul>
            <div className="split-actions">
              <Link className="btn" to="/service-times">
                View Full Schedule
              </Link>
            </div>
          </div>

          <div className="split-panel glass-card">
            <span className="eyebrow">Announcements Preview</span>
            <h2 className="section-title">Stay connected to what is ahead</h2>
            <p className="section-copy">
              Explore upcoming conferences, church updates, and opportunities to gather in faith and fellowship.
            </p>
            <article className="announcement-card glass-card">
              <p className="card-kicker">Featured Event</p>
              <h3 className="card-title">PURE Empowerment Network Conference 2026</h3>
              <p className="card-copy">July 24-26, 2026 | Chattanooga, Tennessee</p>
            </article>
            <div className="split-actions">
              <Link className="btn-secondary" to="/announcements">
                See Announcements
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container grid grid-three">
          <article className="ministry-card glass-card">
            <p className="card-kicker">Ministries Preview</p>
            <h3 className="card-title">Serve every generation</h3>
            <p className="card-copy">
              Ministries are designed to strengthen families, uplift women, develop leaders, and foster prayerful
              community.
            </p>
            <Link className="btn-ghost" to="/ministries">
              Explore Ministries
            </Link>
          </article>

          <article className="stream-card glass-card">
            <p className="card-kicker">Live Stream Preview</p>
            <h3 className="card-title">Worship from anywhere</h3>
            <p className="card-copy">
              Join the live stream through our YouTube channel and stay connected to the Word wherever you are.
            </p>
            <Link className="btn-secondary" to="/live-streaming">
              Open Live Stream
            </Link>
          </article>

          <article className="info-card glass-card">
            <p className="card-kicker">Contact CTA</p>
            <h3 className="card-title">Plan your visit</h3>
            <p className="card-copy">
              We would love to welcome you in person at Mallard Creek Worship Center in Charlotte, North Carolina.
            </p>
            <Link className="btn" to="/contact">
              Contact Us
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}

export default Home;
