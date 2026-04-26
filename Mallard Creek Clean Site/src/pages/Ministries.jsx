import { Link } from 'react-router-dom';

function Ministries() {
  const ministries = [
    {
      title: 'Women of Strength',
      description:
        'A ministry of healing, encouragement, and support for women in transition and women seeking renewed strength.'
    },
    {
      title: 'Family and Marriage',
      description:
        'Kingdom-centered support for marriages and families through wisdom, prayer, and Christ-centered leadership.'
    },
    {
      title: 'Intercessory Prayer',
      description:
        'A dedicated prayer ministry standing in the gap for the church, the community, and those in need of breakthrough.'
    },
    {
      title: 'Bible Study and Discipleship',
      description:
        'Teaching environments that strengthen biblical understanding, spiritual maturity, and daily Christian living.'
    },
    {
      title: 'Worship and Music',
      description:
        "A ministry of praise, psalmistry, and worship that cultivates a sacred atmosphere for God's presence."
    },
    {
      title: 'Leadership Development',
      description:
        'Equipping servants and leaders with wisdom, accountability, and the tools needed for faithful Kingdom service.'
    }
  ];

  return (
    <>
      <section className="page-hero page-hero-immersive">
        <div className="container">
          <div className="page-hero-card glass-card page-hero-feature">
            <span className="eyebrow">Serve and Grow</span>
            <h1 className="page-title">Ministries</h1>
            <p className="page-copy">
              Every ministry is designed to strengthen faith, restore hope, and build Christ-centered community.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container section-split-band">
          <article className="feature-card glass-card fade-in-up">
            <span className="eyebrow">Why Ministries Matter</span>
            <h2 className="section-title">Ministry moments that move people toward purpose</h2>
            <p className="section-copy">
              From intercession to discipleship, our ministries help people grow in faith, find support, and encounter
              God in practical ways.
            </p>
          </article>

          <article className="feature-card glass-card fade-in-up">
            <span className="eyebrow">Get Connected</span>
            <h2 className="section-title">There is room for every generation</h2>
            <p className="section-copy">
              Whether you are looking for prayer, teaching, leadership growth, or community, there is a ministry space
              for you here.
            </p>
            <div className="btn-row">
              <Link className="btn-secondary" to="/contact">
                Contact the Church
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container grid grid-three">
          {ministries.map((ministry) => (
            <article className="ministry-card glass-card fade-in-up" key={ministry.title}>
              <p className="card-kicker">Ministry Focus</p>
              <h2 className="card-title">{ministry.title}</h2>
              <p className="card-copy">{ministry.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Ministries;
