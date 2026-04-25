function Contact({ serviceSchedule }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-card glass-card">
            <span className="eyebrow">Visit Us</span>
            <h1 className="page-title">Contact</h1>
            <p className="page-copy">
              We would love to welcome you to Mallard Creek Worship Center in Charlotte, North Carolina.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container contact-layout">
          <article className="form-card glass-card">
            <h2 className="section-title">Plan your visit</h2>
            <div className="contact-list">
              <div className="contact-item">
                <strong>Address</strong>
                <p className="meta-copy">121 Lawrence Gray Road, Charlotte, NC 28262</p>
              </div>
              <div className="contact-item">
                <strong>Saturday Worship Service</strong>
                <p className="meta-copy">10:30 AM</p>
              </div>
              <div className="contact-item">
                <strong>Conference Call Access</strong>
                <p className="meta-copy">
                  Tuesdays and Wednesdays at 5:15 PM
                  <br />
                  Phone: (267) 807-9495
                  <br />
                  Access Code: 525255027
                </p>
              </div>
            </div>
            <div className="btn-row space-top">
              <a
                className="btn"
                href="https://www.google.com/maps/search/?api=1&query=121+Lawrence+Gray+Road+Charlotte+NC+28262"
                target="_blank"
                rel="noreferrer"
              >
                Open Google Maps
              </a>
            </div>
          </article>

          <article className="info-card glass-card">
            <p className="card-kicker">Weekly Gatherings</p>
            <h2 className="section-title">Connect through worship and study</h2>
            <ul className="list-clean">
              {serviceSchedule.map((service) => (
                <li className="schedule-item" key={service.name}>
                  <div>
                    <strong>{service.name}</strong>
                    <span className="meta-copy">{service.details}</span>
                  </div>
                  <span className="gold-text">{service.time}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}

export default Contact;
