import { Link } from 'react-router-dom';
import { churchContact, churchMedia } from '../siteConfig';

function GivelifyButton() {
  return (
    <a className="givelify-button-link" target="_blank" rel="noreferrer" href={churchMedia.givelifyUrl}>
      <img src="https://images.givelify.com/PrimaryGiveButton2xImg.png" alt="Givelify" />
    </a>
  );
}

function Home({ serviceSchedule }) {
  const saturdayService = serviceSchedule.find((service) => service.name.includes('Saturday'));
  const ministries = [
    {
      title: 'Intercessory Prayer',
      description: 'Covering the church, families, and the community with persistent prayer and faith.'
    },
    {
      title: 'Women of Strength',
      description: 'Encouragement, healing, and community for women walking through every season of life.'
    },
    {
      title: 'Worship and Discipleship',
      description: 'Praise, teaching, and biblical growth that help people encounter God and grow in truth.'
    }
  ];

  return (
    <>
      <section className="hero hero-homepage hero-rebuild">
        <div className="container">
          <div className="home-hero-stage glass-card fade-in-up">
            <div className="home-hero-background" />
            <div className="home-hero-overlay" />
            <div className="hero-microphone-scene" aria-hidden="true">
              <div className="hero-microphone-glow" />
              <div className="hero-microphone-head" />
              <div className="hero-microphone-handle" />
            </div>
            <div className="home-hero-grid">
              <div className="home-hero-copy">
                <span className="eyebrow">Welcome Home</span>
                <h1 className="hero-title">Welcome to Mallard Creek Worship Center</h1>
                <p className="lead">Worship. Faith. Healing. Transformation.</p>
                <div className="hero-actions">
                  <Link className="btn hero-btn hero-btn-primary" to="/live-streaming">
                    Watch Live
                  </Link>
                  <Link className="btn-secondary hero-btn hero-btn-secondary" to="/contact">
                    Plan Your Visit
                  </Link>
                  <Link className="btn-ghost hero-btn hero-btn-ghost" to="/giving">
                    Give Now
                  </Link>
                </div>
              </div>

              <aside className="home-hero-side fade-in-up">
                <div className="hero-side-card hero-side-panel glass-card">
                  <span className="eyebrow">Join Us This Saturday</span>
                  <h2 className="hero-highlight-time">
                    Saturday Worship Service at {saturdayService?.time || '10:30 AM'}
                  </h2>
                  <p className="section-copy">
                    Expect powerful worship, biblical teaching, and a loving church family ready to welcome you.
                  </p>
                </div>

                <div className="hero-side-card hero-contact-card glass-card">
                  <span className="eyebrow">Call Us</span>
                  <a className="hero-contact-link" href={churchContact.phoneHref}>
                    {churchContact.phoneDisplay}
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container section-split-band">
          <article className="feature-card glass-card fade-in-up">
            <span className="eyebrow">New Here</span>
            <h2 className="section-title">There is a place for you here</h2>
            <p className="section-copy">
              Whether you are new to faith, returning to church, or looking for a church family, there is a place for
              you here.
            </p>
            <div className="btn-row">
              <Link className="btn" to="/contact">
                Plan Your Visit
              </Link>
            </div>
          </article>

          <article className="feature-card glass-card fade-in-up">
            <span className="eyebrow">Saturday Worship Highlight</span>
            <h2 className="section-title">Join Us This Saturday</h2>
            <p className="section-copy">Saturday Worship Service at {saturdayService?.time || '10:30 AM'}</p>
            <p className="meta-copy">
              Come ready for worship, biblical teaching, prayer, and a welcoming atmosphere for every generation.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container content-band content-band-dark">
          <div className="section-header fade-in-up">
            <span className="eyebrow">Watch Live</span>
            <h2 className="section-title">Stay connected to worship from anywhere</h2>
            <p className="section-copy">
              Join the church family online through Facebook Live and YouTube Live during worship services and special
              ministry moments.
            </p>
          </div>

          <div className="preview-grid">
            <article className="stream-card glass-card fade-in-up">
              <p className="card-kicker">Facebook Live</p>
              <h3 className="card-title">Watch the broadcast on Facebook</h3>
              <p className="card-copy">
                Join the live stream, receive updates, and stay connected to the ministry online.
              </p>
              <div className="btn-row">
                <Link className="btn" to="/live-streaming">
                  Watch Now
                </Link>
                <a className="btn-secondary" href={churchMedia.facebookUrl} target="_blank" rel="noreferrer">
                  Facebook Page
                </a>
              </div>
            </article>

            <article className="stream-card glass-card fade-in-up">
              <p className="card-kicker">YouTube Live</p>
              <h3 className="card-title">Catch live worship or recent messages</h3>
              <p className="card-copy">
                Worship through the YouTube channel and revisit messages that strengthen your faith through the week.
              </p>
              <div className="btn-row">
                <a className="btn-secondary" href={churchMedia.youtubeUrl} target="_blank" rel="noreferrer">
                  Watch on YouTube
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="eyebrow">Ministries Preview</span>
            <h2 className="section-title">Ministry spaces designed for growth and healing</h2>
            <p className="section-copy">
              Every ministry exists to help people encounter God, build community, and walk in purpose.
            </p>
          </div>

          <div className="grid grid-three">
            {ministries.map((ministry) => (
              <article className="ministry-card glass-card fade-in-up" key={ministry.title}>
                <p className="card-kicker">Ministry Focus</p>
                <h3 className="card-title">{ministry.title}</h3>
                <p className="card-copy">{ministry.description}</p>
              </article>
            ))}
          </div>

          <div className="center-actions fade-in-up">
            <Link className="btn" to="/ministries">
              Explore Ministries
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container giving-preview-band glass-card fade-in-up">
          <div className="giving-preview-copy">
            <span className="eyebrow">Giving Preview</span>
            <h2 className="section-title">Support the work of ministry with faithful giving</h2>
            <p className="section-copy">
              Your generosity helps sustain worship, outreach, and ministry care throughout the church and community.
            </p>
            <div className="giving-pill-row">
              <span className="giving-pill">Tithes</span>
              <span className="giving-pill">Offering</span>
              <span className="giving-pill">Special Donations</span>
            </div>
            <div className="btn-row">
              <Link className="btn-secondary" to="/giving">
                Learn About Giving
              </Link>
            </div>
          </div>

          <div className="giving-preview-action">
            <GivelifyButton />
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container final-cta-panel glass-card fade-in-up">
          <span className="eyebrow">Experience It In Person</span>
          <h2 className="section-title">Experience worship, community, and transformation.</h2>
          <p className="section-copy">
            Join us at {churchContact.addressLine1}, {churchContact.addressLine2}, and worship with us every Saturday.
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/live-streaming">
              Watch Live
            </Link>
            <Link className="btn-secondary" to="/contact">
              Visit This Saturday
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
