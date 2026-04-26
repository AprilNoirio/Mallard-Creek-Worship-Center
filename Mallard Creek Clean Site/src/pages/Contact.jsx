import { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact({ serviceSchedule }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const saturdayService = serviceSchedule.find((service) => service.name.includes('Saturday'));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

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
            <p className="section-copy">Reach out with questions, prayer needs, or plans to visit this Saturday.</p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container contact-layout">
          <article className="form-card glass-card contact-form-card fade-in-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field-group">
                <label className="contact-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="contact-input"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field-group">
                <label className="contact-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="contact-input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formState.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-field-group">
                <label className="contact-label" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="contact-input"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(000) 000-0000"
                  value={formState.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>

              <div className="contact-field-group">
                <label className="contact-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="contact-input contact-textarea"
                  id="message"
                  name="message"
                  placeholder="How can we help?"
                  value={formState.message}
                  onChange={handleChange}
                  rows="6"
                  required
                />
              </div>

              <button className="btn contact-submit" type="submit">
                Send Message
              </button>

              {submitted ? (
                <p className="contact-form-confirmation">Thank you. Your message has been received.</p>
              ) : null}
            </form>
          </article>

          <div className="contact-side-column">
            <article className="info-card glass-card contact-info-card fade-in-up">
              <p className="card-kicker">Church Information</p>
              <div className="contact-info-stack">
                <div>
                  <strong>Address:</strong>
                  <p className="section-copy">
                    121 Lawrence Gray Road
                    <br />
                    Charlotte, NC 28262
                  </p>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <p className="section-copy">(000) 000-0000</p>
                </div>
                <div>
                  <strong>Email:</strong>
                  <p className="section-copy">info@mallardcreekworship.org</p>
                </div>
              </div>
              <a
                className="btn-secondary"
                href="https://www.google.com/maps/search/?api=1&query=121+Lawrence+Gray+Road+Charlotte+NC+28262"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </article>

            <article className="info-card glass-card contact-info-card fade-in-up">
              <p className="card-kicker">Prayer Request Option</p>
              <p className="section-copy">
                Submit a confidential prayer request and receive compassionate follow-up from the ministry team.
              </p>
              <a className="btn-secondary" href="mailto:info@mallardcreekworship.org?subject=Prayer%20Request">
                Submit Prayer Request
              </a>
            </article>

            <article className="info-card glass-card contact-info-card fade-in-up">
              <p className="card-kicker">Join Us This Saturday</p>
              <p className="section-copy">
                We would love to worship with you this Saturday at {saturdayService?.time || '[SERVICE TIME]'}.
              </p>
              <Link className="btn" to="/service-times">
                Plan Your Visit
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
