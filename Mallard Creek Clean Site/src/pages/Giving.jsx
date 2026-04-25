function Giving() {
  const categories = ['Tithes', 'Offering', 'Building Fund', 'Missions', 'Special Donation'];

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
            <p className="card-kicker">Frontend Mockup</p>
            <h2 className="section-title">Secure giving interface</h2>
            <p className="section-copy">
              This page is intentionally frontend-only and ready for real payment integration later.
            </p>

            <div className="giving-categories">
              {categories.map((category) => (
                <div className="giving-pill" key={category}>
                  <strong>{category}</strong>
                  <p className="meta-copy">Prepared for future donation workflow integration.</p>
                </div>
              ))}
            </div>

            <div className="grid space-top">
              <div className="contact-item">
                <strong>Sign in / Create account</strong>
                <p className="meta-copy">Mock authentication entry for returning and new donors.</p>
              </div>
              <div className="contact-item">
                <strong>Recurring giving</strong>
                <p className="meta-copy">Monthly and custom cadence options ready for a future billing provider.</p>
              </div>
              <div className="contact-item">
                <strong>Year-end contribution statements</strong>
                <p className="meta-copy">Download-ready statement area for donor records and tax reporting.</p>
              </div>
            </div>
          </article>

          <div className="grid">
            <article className="dashboard-card glass-card">
              <p className="card-kicker">Donor Dashboard Mockup</p>
              <h3 className="dashboard-title">Giving history</h3>
              <div className="history-row">
                <div>
                  <strong>Tithes</strong>
                  <span className="meta-copy">January 2026</span>
                </div>
                <span className="gold-text">$250.00</span>
              </div>
              <div className="history-row">
                <div>
                  <strong>Offering</strong>
                  <span className="meta-copy">February 2026</span>
                </div>
                <span className="gold-text">$100.00</span>
              </div>
              <div className="history-row">
                <div>
                  <strong>Building Fund</strong>
                  <span className="meta-copy">March 2026</span>
                </div>
                <span className="gold-text">$75.00</span>
              </div>
            </article>

            <article className="dashboard-card glass-card">
              <p className="card-kicker">Admin Accounting Dashboard Mockup</p>
              <div className="dashboard-grid">
                <div className="metric-box">
                  Monthly Giving
                  <strong>$12,480</strong>
                </div>
                <div className="metric-box">
                  Yearly Giving
                  <strong>$146,920</strong>
                </div>
                <div className="metric-box">
                  Active Recurring
                  <strong>84 Donors</strong>
                </div>
                <div className="metric-box">
                  Statement Requests
                  <strong>31 Ready</strong>
                </div>
              </div>
              <div className="btn-row space-top">
                <button className="btn" type="button">
                  Export CSV
                </button>
                <button className="btn-secondary" type="button">
                  View Reports
                </button>
              </div>
            </article>

            <article className="dashboard-card glass-card">
              <p className="card-kicker">Monthly / Yearly Reports Mockup</p>
              <div className="report-row">
                <strong>January 2026 Summary</strong>
                <span className="meta-copy">Balanced</span>
              </div>
              <div className="report-row">
                <strong>Q1 2026 Giving Trend</strong>
                <span className="meta-copy">Upward</span>
              </div>
              <div className="report-row">
                <strong>Year-End 2026 Statements</strong>
                <span className="meta-copy">Prepared</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Giving;
