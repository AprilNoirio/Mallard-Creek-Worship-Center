import { useState } from 'react';
import { Link } from 'react-router-dom';
import { churchContact } from '../siteConfig';

function Contact({ serviceSchedule }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    isPrayerRequest: false
  });
  const [submissionState, setSubmissionState] = useState({
    status: 'idle',
    message: ''
  });
  const saturdayService = serviceSchedule.find((service) => service.name.includes('Saturday'));

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setFormState((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionState({
      status: 'submitting',
      message: ''
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
          isPrayerRequest: formState.isPrayerRequest
        })
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmissionState({
        status: 'success',
        message: 'Thank you. Your message has been sent.'
      });
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
        isPrayerRequest: false
      });
    } catch (error) {
      setSubmissionState({
        status: 'error',
        message: 'Something went wrong. Please try again or email us directly.'
      });
    }
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
        <div className="container">
          <article className="form-card glass-card contact-form-card contact-form-featured fade-in-up">
            <div className="contact-form-intro">
              <span className="eyebrow">Send a Message</span>
              <h2 className="section-title">We would love to hear from you</h2>
              <p className="section-copy">
                Send a message to the ministry team and let us know how we can serve you, pray with you, or help you
                plan your visit.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-grid">
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
              </div>

              <div className="contact-field-group">
                <label className="contact-label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="contact-input"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
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

              <label className="contact-checkbox-row" htmlFor="isPrayerRequest">
                <input
                  id="isPrayerRequest"
                  name="isPrayerRequest"
                  type="checkbox"
                  checked={formState.isPrayerRequest}
                  onChange={handleChange}
                />
                <span>This is a prayer request</span>
              </label>

              <button className="btn contact-submit" type="submit" disabled={submissionState.status === 'submitting'}>
                {submissionState.status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {submissionState.message ? (
                <p
                  className={`contact-form-confirmation ${
                    submissionState.status === 'error' ? 'contact-form-error' : ''
                  }`}
                >
                  {submissionState.message}
                </p>
              ) : null}
            </form>
          </article>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container contact-layout">
          <div className="contact-side-column">
            <article className="info-card glass-card contact-info-card fade-in-up">
              <p className="card-kicker">Church Information</p>
              <div className="contact-info-stack">
                <div>
                  <strong>Address:</strong>
                  <p className="section-copy">
                    {churchContact.addressLine1}
                    <br />
                    {churchContact.addressLine2}
                  </p>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <p className="section-copy">
                    <a href={churchContact.phoneHref}>{churchContact.phoneDisplay}</a>
                  </p>
                </div>
                <div>
                  <strong>Email:</strong>
                  <p className="section-copy">{churchContact.email}</p>
                </div>
              </div>
              <a
                className="btn-secondary"
                href={churchContact.mapsHref}
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
              <a className="btn-secondary" href={`mailto:${churchContact.email}?subject=Prayer%20Request`}>
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

          <article className="info-card glass-card fade-in-up">
            <p className="card-kicker">Plan Your Visit</p>
            <h2 className="section-title">Connect through worship and study</h2>
            <ul className="list-clean">
              {serviceSchedule.map((service) => (
                <li className="schedule-item" key={service.name}>
                  <div>
                    <strong>{service.name}</strong>
                    <span className="meta-copy">{service.details}</span>
                    {service.phone ? (
                      <span className="meta-copy">
                        Phone: {service.phone}
                        <br />
                        Access Code: {service.accessCode}
                      </span>
                    ) : null}
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
