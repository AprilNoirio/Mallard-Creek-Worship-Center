function ServiceTimes({ serviceSchedule }) {
  const saturdayService = serviceSchedule.find((service) => service.name.includes('Saturday'));

  return (
    <>
      <section className="page-hero page-hero-immersive">
        <div className="container">
          <div className="page-hero-card glass-card page-hero-feature">
            <span className="eyebrow">Worship Schedule</span>
            <h1 className="page-title">Service Times</h1>
            <p className="page-copy">
              Join us for worship, prayer, and Bible study throughout the week.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container">
          <div className="service-highlight-bar service-highlight-major glass-card fade-in-up">
            <div>
              <span className="eyebrow">Saturday Worship Service</span>
              <h2 className="service-highlight-title">Join us every Saturday</h2>
              <p className="section-copy">Service begins at {saturdayService?.time || '[Service Time]'}</p>
            </div>
            <p className="section-copy">
              We would love to worship with you and welcome you into a warm church family atmosphere.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container grid grid-two">
          {serviceSchedule.map((service) => (
            <article
              className={`feature-card glass-card service-time-card fade-in-up ${
                service.name.includes('Saturday') ? 'primary' : ''
              }`}
              key={service.name}
            >
              <p className="card-kicker">{service.time}</p>
              <h2 className="card-title">{service.name}</h2>
              <p className="card-copy">{service.details}</p>
              {service.phone ? (
                <p className="card-copy">
                  Phone: {service.phone}
                  <br />
                  Access Code: {service.accessCode}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section section-compact">
        <div className="container">
          <div className="final-cta-panel glass-card fade-in-up">
            <span className="eyebrow">See You Soon</span>
            <h2 className="section-title">Join us this Saturday and worship with the church family.</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceTimes;
