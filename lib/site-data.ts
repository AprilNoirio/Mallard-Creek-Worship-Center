export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Mallard Creek Worship Center",
  email: "mallardcreekworshipcenter@gmail.com",
  phone: "(704) 549-1953",
  phoneHref: "tel:+17045491953",
  addressLines: ["121 Lawrence Gray Rd", "Charlotte, NC 28262"],
  givingUrl: "https://giv.li/mw4v5c",
  facebookUrl: "https://www.facebook.com/MallardCreekWorshipCenter",
  youtubeUrl: "https://www.youtube.com/@MallardCreekWorshipCenter",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Bishop Billy Gore", href: "/about-bishop-billy-gore" },
  { label: "About General Overseer Gore", href: "/about-general-overseer-gore" },
  { label: "Events", href: "/events" },
  { label: "Service Times", href: "/service-times" },
  { label: "Ministries", href: "/ministries" },
  { label: "Watch Online", href: "/watch-online" },
  { label: "Giving", href: "/giving" },
  { label: "Contact", href: "/contact" },
  { label: "Sermon Recap", href: "/sermon-recap" },
];

export const ministries = [
  "Media Ministry",
  "Worship & Music",
  "Youth / Children",
  "Community Outreach",
  "Prayer",
  "Hospitality",
  "Teaching & Discipleship",
];

export const serviceTimes = [
  {
    title: "Sunday Worship Experience",
    time: "11:00 AM",
    description: "Gather with us for powerful worship, biblical teaching, and authentic community.",
  },
  {
    title: "Bible Study",
    time: "Wednesdays at 7:00 PM",
    description: "Grow deeper in the Word with practical teaching, prayer, and discipleship.",
  },
];

export const worshipPlaylist = [
  { title: "God Do It Again For Me", src: "/audio/God_Do_It_Again_For_Me.mp3" },
  { title: "God You Are So Good", src: "/audio/God_You_Are_So_Good.mp3" },
  { title: "Healed By Your Grace", src: "/audio/Healed_By_Your_Grace_Tina_Grace_Music.mp3" },
  { title: "Still I Praise You", src: "/audio/Still_I_Praise_You.mp3" },
];

export const bishopBio = [
  "Bishop Billy Joe Gore was born in Loris, South Carolina, a small town in Horry County. After graduating from Finklea High School, he served in the United States Army and received an honorable discharge. While serving his country, he earned training in construction engineering as a heavy equipment operator and construction plan reader. He was promoted to Superintendent with Blythe Construction Corporation and became the first Black superintendent at Blythe Construction in the Charlotte area.",
  "He is married to his lifetime partner, Annette Gore. He has biological children including Sparkle Frinks, Gregory Parker, Billy Gore Jr., and Timothy Gore, and he is also father to Cherry Gooding, Sharda Colbert, Ezra Gore, Shatoya Gore, and Jamika Gore. He is a loving father to his grandchildren and godchildren.",
  "He preached his initial sermon in September 1988 and was called to pastor Mallard Creek Worship Center in 1989. He pastored Mallard Creek for 30 years. He currently serves as Pastor of Mt. Nebo Baptist Church in Loris, South Carolina, and is the Bishop Designate of Mallard Creek.",
  "Bishop Billy Gore received his Doctorate Degree from C.E. Graham Baptist Bible Institute in 2002. He served as District Overseer of North Carolina for Full Gospel Worship Center under Bishop Paul Morton and Bishop Joseph Walker.",
  "He currently serves under Bishop Derrick Coleman with the P.U.R.E. Network, which stands for Pastors United and Restoring Excellence, and serves as Bishop over the Family and Marriage division in the P.U.R.E. Empowerment Network.",
  "He is known as a man of wisdom, a \"Jack of all Trades,\" and a \"Classic Man.\" He also served as the CEO of Gore Community Development.",
];

export const annetteBio = [
  "General Overseer Annette Gore was born on December 27th to Bishop Fred and Pastor Annie R. Thomas. She was educated in the Charlotte Mecklenburg School System, graduating from Garinger High School and furthering her education at Central Piedmont Community College in Business Finance. She was employed with Bank of America for 16 years.",
  "She began her Christian journey at Ways of Joy Baptist Church under the leadership of Reverend McDonald and Pastor Arthur L. Higgins, current Pastor Frank McCullough. She preached her initial sermon on January 11, 1998. Overseer Gore received her Associates in Theology and Biblical Studies from the Full Gospel Baptist Church Pastorship School of Theology in July 2004.",
  "Overseer Gore is married to her life partner, Bishop Designate Billy Joe Gore, Sr., and they have been married for over 30 years.",
  "She was appointed and installed by her husband, Bishop Designate Gore, as Pastor of Mallard Creek Worship Center in 2015. Currently, she serves as General Overseer of Women and works alongside her husband in the Family and Marriage division for the P.U.R.E. Network.",
  "She is also a member of Kingdom Impact Ministries under Apostle Dereck Kelly and Lady Kimberly Kelly. Overseer Gore is the Founder of Women of Strength Ministries, which provided her the opportunity to serve as a radio co-host on WGSP 1310 AM for many years.",
  "This ministry was birthed to help women in transition and those who are hurting and in need of healing. She is known for her powerful encouragement: \"You Can Make It.\"",
  "Overseer Gore is also a psalmist and has recorded projects with The Bright Stars of Charlotte. She was inducted into the American Business Women Association in 2002.",
];

export const events = [
  {
    slug: "vacation-bible-school-hooked",
    title: "Vacation Bible School: Hooked",
    date: "Saturday, June 27, 2026",
    location: "Mallard Creek Worship Center",
    image: "/vacation-bible-school-2026.png",
    description:
      "A joyful day of faith, fun, fellowship, and Bible-centered activities for children and families.",
  },
  {
    slug: "pure-empowerment-network-conference-2026",
    title: "Pure Empowerment Network Conference 2026",
    date: "July 24–26, 2026",
    location: "Chattanooga, Tennessee",
    image: "/pure-empowerment-conference-2026.jpg",
    description:
      "A powerful conference experience centered on purpose, faith, leadership, and legacy.",
    details: {
      heading: "Conference 2026",
      subheading: "Positioned for Purpose",
      theme: "Igniting Faith. Fueling Legacy.",
      registerUrl:
        "https://www.eventbrite.com/e/pure-empowerment-network-conference-2026-tickets-1983989079745",
      hotelUrl:
        "https://www.ihg.com/staybridge/hotels/us/en/chattanooga/chafr/hoteldetail",
    },
  },
];

export const sermonRecap = {
  title: "Positioned for Renewal",
  speaker: "General Overseer Annette Gore",
  scripture: "Isaiah 43:19",
  mainPoints: [
    "God often begins something fresh in places that felt dry, delayed, or overlooked.",
    "Faith grows when we stay responsive to God's movement instead of clinging to old patterns.",
    "Renewal becomes visible when prayer, obedience, and expectation move together.",
  ],
  reflection:
    "Where is God asking you to trust Him again, even if the path ahead is still taking shape?",
  prayer:
    "Lord, awaken our hearts to Your new work. Give us strength to trust Your timing, courage to obey Your leading, and joy to walk in renewed faith.",
};
