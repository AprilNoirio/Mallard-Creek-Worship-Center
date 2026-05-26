import { Link } from 'react-router-dom';
import { useState } from 'react';

function Announcements() {
  const [missingImages, setMissingImages] = useState({
    conference: false,
    vbs: false
  });

  const markMissing = (key) => {
    setMissingImages((current) => ({
      ...current,
      [key]: true
    }));
  };

  return (
    <>
      <section className="page-hero page-hero-immersive">
        <div className="container">
          <div className="page-hero-card glass-card page-hero-feature">
            <span className="eyebrow">Featured Event</span>
            <h1 className="page-title">Announcements</h1>
            <p className="page-copy">Stay informed about upcoming gatherings, conferences, and ministry moments.</p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container announcement-hero">
          <div className="announcement-image">
            {!missingImages.conference ? (
              <img
                src="/assets/pure-empowerment-conference-2026.jpg"
                alt="PURE Empowerment Network Conference 2026"
                onError={() => markMissing('conference')}
              />
            ) : (
              <div className="fallback-portrait">Conference artwork will appear here.</div>
            )}
          </div>

          <article className="announcement-card glass-card">
            <p className="card-kicker">PURE Empowerment Network Conference 2026</p>
            <h2 className="section-title">Positioned for Purpose. Igniting Faith. Fueling Legacy.</h2>
            <p className="section-copy">
              July 24-26, 2026
              <br />
              Chattanooga, Tennessee
            </p>
            <p className="section-copy">
              Join the PURE Empowerment Network Conference 2026 for a powerful time of leadership, faith, and legacy.
              This special gathering will bring believers together for inspiration, empowerment, and fellowship.
            </p>
            <div className="btn-row">
              <a
                className="btn"
                href="https://www.eventbrite.com/e/pure-empowerment-network-conference-2026-tickets-1983989079745"
                target="_blank"
                rel="noreferrer"
              >
                Register Now
              </a>
              <a
                className="btn-secondary"
                href="https://www.ihg.com/staybridge/hotels/us/en/chattanooga/chafr/hoteldetail"
                target="_blank"
                rel="noreferrer"
              >
                Book Hotel
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container announcement-hero">
          <div className="announcement-image">
            {!missingImages.vbs ? (
              <img
                src="/assets/vacation-bible-school-2026.png"
                alt="Vacation Bible School Hooked event flyer for Mallard Creek Worship Center"
                onError={() => markMissing('vbs')}
              />
            ) : (
              <div className="fallback-portrait">Vacation Bible School artwork will appear here.</div>
            )}
          </div>

          <article className="announcement-card glass-card">
            <p className="card-kicker">Vacation Bible School 2026</p>
            <h2 className="section-title">Hooked: Reeling in God's Love</h2>
            <p className="section-copy">
              Saturday, June 27, 2026
              <br />
              Starts at 9:00 AM
              <br />
              Mallard Creek Worship Center
              <br />
              121 Lawrence Gray Rd, Charlotte, NC 28262
            </p>
            <p className="section-copy">
              Families are invited for a fun-filled day of faith, fellowship, and activity at Vacation Bible School.
              Enjoy Bible stories, games, bounce houses, food, and a picnic on the lawn for the whole family.
            </p>
            <div className="btn-row">
              <Link className="btn" to="/contact">
                Learn More
              </Link>
              <a
                className="btn-secondary"
                href="https://www.google.com/maps/search/?api=1&query=121+Lawrence+Gray+Road+Charlotte+NC+28262"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container section-split-band">
          <article className="feature-card glass-card fade-in-up">
            <span className="eyebrow">Stay Connected</span>
            <h2 className="section-title">Keep up with ministry gatherings and special moments</h2>
            <p className="section-copy">
              Check this page often for conferences, ministry announcements, worship gatherings, and special updates
              from the church.
            </p>
          </article>

          <article className="feature-card glass-card fade-in-up">
            <span className="eyebrow">Need More Information?</span>
            <h2 className="section-title">Reach out if you have questions about upcoming events</h2>
            <p className="section-copy">
              We would love to help you get connected and prepare for the next ministry opportunity.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default Announcements;
