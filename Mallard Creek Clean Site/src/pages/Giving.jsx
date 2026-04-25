import { useState } from 'react';

function Giving() {
  const categories = ['Tithes', 'Offering', 'Building Fund', 'Missions', 'Special Donation'];
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-card glass-card">
            <span className="eyebrow">Giving Portal</span>
            <h1 className="page-title">Giving</h1>
            <p className="page-copy">
              A polished, integration-ready giving experience designed for future payment processor connection.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container giving-layout">
          <article className="form-card glass-card">
            <p className="card-kicker">Secure Giving</p>
            <h2 className="section-title">Secure giving interface</h2>
            <p className="section-copy">
              This page is intentionally frontend-only and ready for real payment integration later.
            </p>

            <div className="giving-categories">
              {categories.map((category) => (
                <div className="giving-pill" key={category}>
                  <strong>{category}</strong>
                  <p className="meta-copy">Prepared for secure donation workflow integration.</p>
                </div>
              ))}
            </div>

            <div className="grid space-top">
              <div className="contact-item">
                <strong>Sign in / Create account</strong>
                <p className="meta-copy">
                  Donor history and private account records appear only after the donor signs in.
                </p>
              </div>
              <div className="contact-item">
                <strong>Recurring giving</strong>
                <p className="meta-copy">Monthly and custom cadence options ready for a future billing provider.</p>
              </div>
              <div className="contact-item">
                <strong>Year-end contribution statements</strong>
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
                    <button className="btn-secondary" type="button">
                      Give Now
                    </button>
                  </>
                )}
              </div>
            </div>
          </article>

          {isSignedIn ? (
            <div className="grid">
              <article className="dashboard-card glass-card donor-private-card">
                <p className="card-kicker">Private Donor Dashboard</p>
                <h3 className="dashboard-title">Giving history</h3>
                <p className="section-copy">
                  No giving history is available yet.
                </p>
                <p className="meta-copy">
                  Real donation amounts and dates will appear here only after a live backend or payment processor is
                  connected to the signed-in donor account.
                </p>
              </article>

              <article className="dashboard-card glass-card donor-private-card">
                <p className="card-kicker">Statements and Recurring Giving</p>
                <h3 className="dashboard-title">Secure donor tools</h3>
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
    </>
  );
}

export default Giving;
