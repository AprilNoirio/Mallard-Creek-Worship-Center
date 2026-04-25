import { useState } from 'react';

function Announcements() {
  const [imageMissing, setImageMissing] = useState(false);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-card glass-card">
            <span className="eyebrow">Featured Event</span>
            <h1 className="page-title">Announcements</h1>
            <p className="page-copy">Stay informed about upcoming gatherings, conferences, and ministry moments.</p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container announcement-hero">
          <div className="announcement-image">
            {!imageMissing ? (
              <img
                src="/assets/pure-empowerment-conference-2026.jpg"
                alt="PURE Empowerment Network Conference 2026"
                onError={() => setImageMissing(true)}
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
    </>
  );
}

export default Announcements;
