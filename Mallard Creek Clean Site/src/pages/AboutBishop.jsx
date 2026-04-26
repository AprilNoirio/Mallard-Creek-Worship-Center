import { useState } from 'react';

function AboutBishop() {
  const [imageMissing, setImageMissing] = useState(false);

  return (
    <>
      <section className="page-hero page-hero-immersive">
        <div className="container">
          <div className="page-hero-card glass-card page-hero-feature">
            <span className="eyebrow">Leadership</span>
            <h1 className="page-title">Bishop Billy Gore</h1>
            <p className="page-copy">A Life of Leadership, Service, Wisdom, and Kingdom Building</p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container profile-layout">
          <div className="profile-image-wrap">
            <div className="portrait-frame bishop-portrait-card">
              {!imageMissing ? (
                <img
                  className="bishop-portrait-photo"
                  src="/assets/bishop-billy-gore.jpg"
                  alt="Bishop Billy Gore of Mallard Creek Worship Center"
                  onError={() => setImageMissing(true)}
                />
              ) : (
                <div className="fallback-portrait">Bishop Billy Gore portrait will appear here.</div>
              )}
            </div>
          </div>

          <article className="profile-card glass-card">
            <div className="profile-accent-row">
              <span className="giving-pill">Leadership</span>
              <span className="giving-pill">Kingdom Building</span>
              <span className="giving-pill">Wisdom</span>
            </div>
            <p className="section-copy">
              Bishop Designate Billy Joe Gore was born in Loris, South Carolina, a small town in Horry County. After
              graduating from Finklea High School, he served in the United States Army and received an honorable
              discharge. While serving his country, he earned training in construction engineering as a heavy equipment
              operator and construction plan reader. He was promoted to Superintendent with Blythe Construction
              Corporation and became the first Black superintendent at Blythe Construction in the Charlotte area.
            </p>
            <p className="section-copy">
              He is married to his lifetime partner, Annette Gore. He has biological children including Sparkle Frinks,
              Gregory Parker, Billy Gore Jr., and Timothy Gore, and he is also father to Cherry Gooding, Sharda
              Colbert, Ezra Gore, Shatoya Gore, and Jamika Gore. He is a loving father to his grandchildren and
              godchildren.
            </p>
            <p className="section-copy">
              He preached his initial sermon in September 1988 and was called to pastor Mallard Creek Worship Center in
              1989. He pastored Mallard Creek for 30 years. He currently serves as Pastor of Mt. Nebo Baptist Church
              in Loris, South Carolina, and is the Bishop Designate of Mallard Creek.
            </p>
            <p className="section-copy">
              Bishop Billy Gore received his Doctorate Degree from C.E. Graham Baptist Bible Institute in 2002. He
              served as District Overseer of North Carolina for Full Gospel Worship Center under Bishop Paul Morton and
              Bishop Joseph Walker.
            </p>
            <p className="section-copy">
              He currently serves under Bishop Derrick Coleman with the P.U.R.E. Network, which stands for Pastors
              United and Restoring Excellence, and serves as Bishop over the Family and Marriage division in the P.U.R.E.
              Empowerment Network.
            </p>
            <p className="section-copy">
              He is known as a man of wisdom, a "Jack of all Trades," and a "Classic Man." He also served as the CEO
              of Gore Community Development.
            </p>
            <blockquote className="quote-block">"A man of wisdom, strength, and Kingdom purpose."</blockquote>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutBishop;
