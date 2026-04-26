import { Link } from 'react-router-dom';

function Home({ serviceSchedule }) {
  const saturdayService = serviceSchedule.find((service) => service.name.includes('Saturday'));

  return (
    <>
      <section className="service-highlight-strip fade-in-up">
        <div className="container">
          <div className="service-highlight-bar glass-card">
            <div>
              <span className="eyebrow">Saturday Worship Service</span>
              <h2 className="service-highlight-title">Join us every Saturday</h2>
              <p className="section-copy">
                Service begins at {saturdayService?.time || '[Service Time]'}.
              </p>
            </div>
            <div className="btn-row">
              <Link className="btn" to="/service-times">
                View Service Times
              </Link>
              <Link className="btn-secondary" to="/contact">
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="hero hero-homepage">
        <div className="container">
          <div className="hero-cinematic glass-card fade-in-up">
            <div className="hero-cinematic-overlay" />
            <div className="hero-cinematic-grid">
              <div className="hero-cinematic-copy">
                <span className="eyebrow">Welcome Home</span>
                <h1 className="hero-title">Welcome to Mallard Creek Worship Center</h1>
                <p className="lead">A place to worship, grow, heal, and encounter God.</p>

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
              </div>

              <aside className="hero-side-card glass-card fade-in-up">
                <span className="eyebrow">Join Us This Saturday</span>
                <h2 className="section-title">A welcoming church family ready to worship with you</h2>
                <p className="section-copy">
                  Expect heartfelt worship, biblical teaching, prayer, and a warm church family ready to welcome you.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="eyebrow">Welcome Message</span>
            <h2 className="section-title">A church rooted in worship, warmth, and spiritual renewal</h2>
            <p className="section-copy">
              Mallard Creek Worship Center is a place where faith is strengthened, worship is sincere, and every guest
              is welcomed like family.
            </p>
          </div>

          <div className="grid grid-three">
            <article className="feature-card glass-card fade-in-up">
              <p className="card-kicker">Saturday Service Highlight</p>
              <h3 className="card-title">Join us every Saturday</h3>
              <p className="card-copy">
                Saturday Worship Service begins at {saturdayService?.time || '[Service Time]'} with worship, the Word,
                and encouragement for every generation.
              </p>
              <Link className="btn-ghost" to="/service-times">
                Saturday at {saturdayService?.time || '[Service Time]'}
              </Link>
            </article>

            <article className="stream-card glass-card fade-in-up">
              <p className="card-kicker">Watch Live Callout</p>
              <h3 className="card-title">Worship with us from wherever you are</h3>
              <p className="card-copy">
                Join the live broadcast, stay connected through Facebook and YouTube, and worship with us from
                anywhere.
              </p>
              <Link className="btn-secondary" to="/live-streaming">
                Open Watch Live
              </Link>
            </article>

            <article className="info-card glass-card fade-in-up">
              <p className="card-kicker">Giving Callout</p>
              <h3 className="card-title">Support the work of ministry</h3>
              <p className="card-copy">
                Give securely to support worship, outreach, ministry care, and the continued work God is doing through
                this church family.
              </p>
              <Link className="btn" to="/giving">
                Give Securely
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container split-layout">
          <div className="split-panel glass-card fade-in-up">
            <span className="eyebrow">Ministries Preview</span>
            <h2 className="section-title">Ministries that strengthen every generation</h2>
            <p className="section-copy">
              From worship and prayer to discipleship and family support, our ministries help people grow in grace,
              healing, and purpose.
            </p>
            <div className="grid grid-two">
              <div className="stat-card">
                <span className="stat-value">Prayer</span>
                <span className="meta-copy">A church committed to intercession and spiritual covering.</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">Discipleship</span>
                <span className="meta-copy">Teaching environments that deepen faith and biblical understanding.</span>
              </div>
            </div>
            <div className="split-actions">
              <Link className="btn" to="/ministries">
                Explore Ministries
              </Link>
            </div>
          </div>

          <div className="split-panel glass-card fade-in-up">
            <span className="eyebrow">Plan Your Visit</span>
            <h2 className="section-title">We would love to welcome you in person</h2>
            <p className="section-copy">
              Join us in Charlotte, North Carolina for worship, fellowship, and a warm church family atmosphere.
            </p>
            <ul className="list-clean">
              <li className="schedule-item">
                <div>
                  <strong>Saturday Worship Service</strong>
                  <span className="meta-copy">Join us every Saturday for worship and the Word.</span>
                </div>
                <span className="gold-text">{saturdayService?.time || '[Service Time]'}</span>
              </li>
              <li className="schedule-item">
                <div>
                  <strong>Address</strong>
                  <span className="meta-copy">121 Lawrence Gray Road, Charlotte, NC 28262</span>
                </div>
              </li>
            </ul>
            <div className="split-actions">
              <Link className="btn-secondary" to="/contact">
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
