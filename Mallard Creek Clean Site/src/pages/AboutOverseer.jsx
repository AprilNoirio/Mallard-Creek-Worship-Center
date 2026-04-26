import { useState } from 'react';

function AboutOverseer() {
  const [imageMissing, setImageMissing] = useState(false);

  return (
    <>
      <section className="page-hero page-hero-immersive">
        <div className="container">
          <div className="page-hero-card glass-card page-hero-feature">
            <span className="eyebrow">General Overseer</span>
            <h1 className="page-title">General Overseer Annette Gore</h1>
            <p className="page-copy">A Legacy of Faith, Leadership, and Kingdom Building</p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container profile-layout">
          <div className="profile-image-wrap">
            <div className="portrait-frame bishop-portrait-card fade-in-up">
              {!imageMissing ? (
                <img
                  className="bishop-portrait-photo"
                  src="/assets/annette-gore.png"
                  alt="General Overseer Annette Gore"
                  onError={() => setImageMissing(true)}
                />
              ) : (
                <div className="fallback-portrait">General Overseer Annette Gore portrait will appear here.</div>
              )}
            </div>
          </div>

          <article className="profile-card glass-card fade-in-up">
            <div className="profile-accent-row">
              <span className="giving-pill">Faith</span>
              <span className="giving-pill">Encouragement</span>
              <span className="giving-pill">Women of Strength</span>
            </div>
            <p className="section-copy">
              General Overseer Annette Gore was born on December 27th to Bishop Fred and Pastor Annie R. Thomas. She
              was educated in the Charlotte Mecklenburg School System, graduating from Garinger High School and
              furthering her education at Central Piedmont Community College in Business Finance. She was employed with
              Bank of America for 16 years.
            </p>
            <p className="section-copy">
              She began her Christian journey at Ways of Joy Baptist Church under the leadership of Reverend McDonald
              and Pastor Arthur L. Higgins, current Pastor Frank McCullough. She preached her initial sermon on January
              11, 1998. Overseer Gore received her Associates in Theology and Biblical Studies from the Full Gospel
              Baptist Church Pastorship School of Theology in July 2004.
            </p>
            <p className="section-copy">
              Overseer Gore is married to her life partner, Bishop Designate Billy Joe Gore, Sr., and they have been
              married for over 30 years.
            </p>
            <p className="section-copy">
              She was appointed and installed by her husband, Bishop Designate Gore, as Pastor of Mallard Creek Worship
              Center in 2015. Currently, she serves as General Overseer of Women and works alongside her husband in the
              Family and Marriage division for the P.U.R.E. Network.
            </p>
            <p className="section-copy">
              She is also a member of Kingdom Impact Ministries under Apostle Dereck Kelly and Lady Kimberly Kelly.
              Overseer Gore is the Founder of Women of Strength Ministries, which provided her the opportunity to serve
              as a radio co-host on WGSP 1310 AM for many years.
            </p>
            <p className="section-copy">
              This ministry was birthed to help women in transition and those who are hurting and in need of healing.
              She is known for her powerful encouragement: "You Can Make It."
            </p>
            <p className="section-copy">
              Overseer Gore is also a psalmist and has recorded projects with The Bright Stars of Charlotte. She was
              inducted into the American Business Women Association in 2002.
            </p>
            <blockquote className="quote-block">"You Can Make It."</blockquote>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutOverseer;
