import { useState } from 'react';

const givingCategories = [
  {
    title: 'Tithes',
    description: 'Honor God through regular faithful giving.'
  },
  {
    title: 'Offering',
    description: 'Support ongoing ministry needs and worship services.'
  },
  {
    title: 'Special Donations',
    description: 'Give toward special causes, building needs, outreach, events, or ministry initiatives.'
  }
];

function GivelifyButton() {
  return (
    <a className="givelify-button-link" target="_blank" rel="noreferrer" href="https://giv.li/mw4v5c">
      <img src="https://images.givelify.com/PrimaryGiveButton2xImg.png" alt="Givelify" />
    </a>
  );
}

function Giving() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-card glass-card">
            <span className="eyebrow">Faithful Giving</span>
            <h1 className="page-title">Give Now</h1>
            <p className="page-copy">
              Support the ministry of Mallard Creek Worship Center through faithful giving.
            </p>
            <p className="section-copy">
              Your generosity helps us continue worship services, outreach, ministry growth, and community impact.
            </p>
            <div className="giving-primary-cta">
              <GivelifyButton />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container">
          <div className="grid grid-three">
            {givingCategories.map((category) => (
              <article className="giving-category-card glass-card fade-in-up" key={category.title}>
                <p className="card-kicker">Give With Purpose</p>
                <h2 className="card-title">{category.title}</h2>
                <p className="card-copy">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container giving-layout">
          <article className="form-card glass-card fade-in-up">
            <p className="card-kicker">Secure Giving Options</p>
            <h2 className="section-title">Give with confidence and clarity</h2>
            <p className="section-copy">
              Give securely online, manage your giving account, and stay connected to future donor tools as they become
              available.
            </p>

            <div className="grid space-top">
              <div className="contact-item">
                <strong>Sign in / Create account</strong>
                <p className="meta-copy">
                  Donor history and private account records appear only after the donor signs in.
                </p>
              </div>
              <div className="contact-item">
                <strong>Give Now</strong>
                <p className="meta-copy">Use Givelify to support the ministry quickly and securely.</p>
              </div>
              <div className="contact-item">
                <strong>Recurring giving and statements</strong>
                <p className="meta-copy">Available after donor authentication and real giving data connection.</p>
              </div>
            </div>

            <div className="giving-auth-panel space-top">
              <div className="contact-item">
                <strong>{isSignedIn ? 'Donor account connected' : 'Private donor access'}</strong>
                <p className="meta-copy">
                  {isSignedIn
                    ? 'Signed-in donor view is active. Only donor-specific records should appear below.'
                    : 'Sign in or create an account to access your secure giving dashboard and personal records.'}
                </p>
              </div>

              <div className="btn-row space-top">
                {isSignedIn ? (
                  <button className="btn-secondary" type="button" onClick={() => setIsSignedIn(false)}>
                    Sign Out
                  </button>
                ) : (
                  <>
                    <button className="btn" type="button" onClick={() => setIsSignedIn(true)}>
                      Sign In / Create Account
                    </button>
                    <GivelifyButton />
                  </>
                )}
              </div>
            </div>
          </article>

          {isSignedIn ? (
            <div className="grid">
              <article className="dashboard-card glass-card donor-private-card fade-in-up">
                <p className="card-kicker">Private Donor Dashboard</p>
                <h3 className="dashboard-title">Giving history</h3>
                <p className="section-copy">No giving history is available yet.</p>
                <p className="meta-copy">
                  Real donation amounts and dates will appear here only after a live backend or payment processor is
                  connected to the signed-in donor account.
                </p>
              </article>

              <article className="dashboard-card glass-card donor-private-card fade-in-up">
                <p className="card-kicker">Secure Donor Tools</p>
                <h3 className="dashboard-title">Statements and recurring giving</h3>
                <p className="section-copy">
                  Contribution statements, recurring giving controls, and donor account details will appear here once
                  secure account integration is connected.
                </p>
                <p className="meta-copy">Coming Soon</p>
              </article>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section section-compact">
        <div className="container">
          <div className="giving-thankyou glass-card fade-in-up">
            <span className="eyebrow">Thank You</span>
            <h2 className="section-title">
              Thank you for sowing into the work of the ministry. Every gift makes a difference.
            </h2>
            <div className="giving-primary-cta">
              <GivelifyButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Giving;
