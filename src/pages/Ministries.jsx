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
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-card glass-card">
            <span className="eyebrow">Serve and Grow</span>
            <h1 className="page-title">Ministries</h1>
            <p className="page-copy">Every ministry is designed to strengthen faith, restore hope, and build community.</p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container grid grid-three">
          {ministries.map((ministry) => (
            <article className="ministry-card glass-card" key={ministry.title}>
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
