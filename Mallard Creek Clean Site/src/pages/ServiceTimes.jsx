function ServiceTimes({ serviceSchedule }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-card glass-card">
            <span className="eyebrow">Worship Schedule</span>
            <h1 className="page-title">Service Times</h1>
            <p className="page-copy">
              Join us for worship, prayer, and Bible study throughout the week.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container grid grid-two">
          {serviceSchedule.map((service) => (
            <article className="feature-card glass-card" key={service.name}>
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
    </>
  );
}

export default ServiceTimes;
