import { Link } from 'react-router-dom';
import { useState } from 'react';

function FooterLogo() {
  const [broken, setBroken] = useState(false);

  return (
    <div className="footer-logo-badge">
      {!broken ? (
        <img
          src="/assets/mallard-creek-logo.png"
          alt="Mallard Creek Worship Center Logo"
          onError={() => setBroken(true)}
        />
      ) : (
        <div className="fallback-logo">MCWC</div>
      )}
    </div>
  );
}

function Footer({ serviceSchedule }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-card glass-card">
          <div className="footer-grid">
            <div>
              <Link className="footer-logo" to="/">
                <FooterLogo />
                <div>
                  <strong>Mallard Creek Worship Center</strong>
                  <p className="meta-copy">A place of worship, faith, healing, and transformation.</p>
                </div>
              </Link>
            </div>

            <div>
              <h3 className="card-title">Contact</h3>
              <div className="footer-links">
                <span className="meta-copy">121 Lawrence Gray Road</span>
                <span className="meta-copy">Charlotte, NC 28262</span>
                <a
                  className="btn-ghost"
                  href="https://www.google.com/maps/search/?api=1&query=121+Lawrence+Gray+Road+Charlotte+NC+28262"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div>
              <h3 className="card-title">Service Times</h3>
              <div className="footer-links">
                {serviceSchedule.map((service) => (
                  <span className="meta-copy" key={service.name}>
                    {service.name} - {service.time}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="card-title">Quick Links</h3>
              <div className="footer-links">
                <Link to="/announcements">Announcements</Link>
                <Link to="/live-streaming">Live Streaming</Link>
                <Link to="/giving">Giving</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
          <p className="footer-note">
            Mallard Creek Worship Center. Built for worship, fellowship, and digital ministry outreach.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
