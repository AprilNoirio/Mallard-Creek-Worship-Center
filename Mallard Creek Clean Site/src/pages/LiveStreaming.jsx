import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/MallardCreekWorshipCenter';
// Facebook may require a specific public live video URL for direct playback in the embedded video player.
// If a public live or replay video URL is available, place it here to prioritize the official embedded video player.
const FACEBOOK_LIVE_VIDEO_URL = '';
const FACEBOOK_PAGE_PLUGIN_URL =
  'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMallardCreekWorshipCenter&tabs=timeline&width=1200&height=720&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false';
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@MallardCreekWorshipCenter';
const YOUTUBE_CHANNEL_ID = 'UCHpMkz2j9Ri2buhH61UdxfQ';
// If a specific YouTube live or latest sermon embed URL is preferred later, replace this value.
const YOUTUBE_CUSTOM_EMBED_URL = '';

function encodeUrl(url) {
  return encodeURIComponent(url);
}

function LiveStreaming({ serviceSchedule }) {
  const embedRef = useRef(null);
  const [shouldLoadEmbed, setShouldLoadEmbed] = useState(false);
  const [facebookEmbedFailed, setFacebookEmbedFailed] = useState(false);
  const [youtubeEmbedFailed, setYoutubeEmbedFailed] = useState(false);
  const saturdayService = serviceSchedule.find((service) => service.name.includes('Saturday'));

  useEffect(() => {
    if (!embedRef.current) {
      setShouldLoadEmbed(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadEmbed(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px 0px' }
    );

    observer.observe(embedRef.current);

    return () => observer.disconnect();
  }, []);

  const facebookEmbedSrc = useMemo(() => {
    if (FACEBOOK_LIVE_VIDEO_URL) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeUrl(
        FACEBOOK_LIVE_VIDEO_URL
      )}&show_text=false&width=1200&allowfullscreen=true`;
    }

    return FACEBOOK_PAGE_PLUGIN_URL;
  }, []);

  const youtubeEmbedSrc = useMemo(() => {
    if (YOUTUBE_CUSTOM_EMBED_URL) {
      return YOUTUBE_CUSTOM_EMBED_URL;
    }

    return `https://www.youtube.com/embed/live_stream?channel=${YOUTUBE_CHANNEL_ID}&autoplay=1&mute=1`;
  }, []);

  const facebookPlayerContent = useMemo(() => {
    if (facebookEmbedFailed) {
      return (
        <div className="stream-fallback glass-card">
          <h2 className="section-title">Live stream available on Facebook</h2>
          <p className="section-copy">
            Join Mallard Creek Worship Center on Facebook to watch the live broadcast and latest ministry video
            updates.
          </p>
          <a className="btn" href={FACEBOOK_PAGE_URL} target="_blank" rel="noreferrer">
            Watch on Facebook
          </a>
        </div>
      );
    }

    return shouldLoadEmbed ? (
      <iframe
        src={facebookEmbedSrc}
        title={
          FACEBOOK_LIVE_VIDEO_URL
            ? 'Mallard Creek Worship Center Facebook Live Video'
            : 'Mallard Creek Worship Center Facebook Live and Page Feed'
        }
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        onError={() => setFacebookEmbedFailed(true)}
      />
    ) : (
      <div className="stream-loading">
        <p className="section-copy">Preparing Facebook live player...</p>
      </div>
    );
  }, [facebookEmbedFailed, shouldLoadEmbed, facebookEmbedSrc]);

  const youtubePlayerContent = useMemo(() => {
    if (youtubeEmbedFailed) {
      return (
        <div className="stream-fallback glass-card">
          <h2 className="section-title">Live stream available on YouTube</h2>
          <p className="section-copy">
            Watch the church broadcast or latest available sermon directly on the YouTube channel.
          </p>
          <a className="btn" href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noreferrer">
            Watch on YouTube
          </a>
        </div>
      );
    }

    return shouldLoadEmbed ? (
      <iframe
        src={youtubeEmbedSrc}
        title="Mallard Creek Worship Center YouTube Live Video"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        onError={() => setYoutubeEmbedFailed(true)}
      />
    ) : (
      <div className="stream-loading">
        <p className="section-copy">Preparing YouTube live player...</p>
      </div>
    );
  }, [shouldLoadEmbed, youtubeEmbedFailed, youtubeEmbedSrc]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-card glass-card">
            <span className="eyebrow">Broadcast Worship</span>
            <h1 className="page-title">Watch Live</h1>
            <p className="page-copy">Join Mallard Creek Worship Center live online through Facebook or YouTube.</p>
            <p className="section-copy">Worship with us from anywhere and stay connected to every service.</p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container stream-grid">
          <article className="stream-card glass-card fade-in-up" ref={embedRef}>
            <div className="stream-card-header">
              <span className="stream-platform-badge">f</span>
              <div>
                <p className="card-kicker">Facebook Live</p>
                <h2 className="card-title">Watch from Facebook</h2>
              </div>
            </div>
            <div className="stream-player-shell glass-card">
              <div className="stream-embed stream-embed-facebook">{facebookPlayerContent}</div>
            </div>
            <p className="stream-note">
              {FACEBOOK_LIVE_VIDEO_URL
                ? 'Facebook direct video playback is enabled using a specific public live video URL.'
                : 'Add a specific public live video URL anytime you want Facebook direct playback here.'}
            </p>
            <div className="btn-row">
              <a className="btn-secondary" href={FACEBOOK_PAGE_URL} target="_blank" rel="noreferrer">
                Watch on Facebook
              </a>
            </div>
          </article>

          <article className="stream-card glass-card fade-in-up">
            <div className="stream-card-header">
              <span className="stream-platform-badge youtube">▶</span>
              <div>
                <p className="card-kicker">YouTube Live</p>
                <h2 className="card-title">Watch from YouTube</h2>
              </div>
            </div>
            <div className="stream-player-shell glass-card">
              <div className="stream-embed stream-embed-youtube">{youtubePlayerContent}</div>
            </div>
            <p className="stream-note">
              {YOUTUBE_CUSTOM_EMBED_URL
                ? 'A custom YouTube live or latest-sermon embed URL is configured for direct playback.'
                : 'Update the YouTube embed placeholder anytime you want this page to point to a specific live stream or recent message.'}
            </p>
            <div className="btn-row">
              <a className="btn-secondary" href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noreferrer">
                Watch on YouTube
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container">
          <div className="service-highlight-bar glass-card fade-in-up">
            <div>
              <span className="eyebrow">Join Us In Person</span>
              <h2 className="service-highlight-title">
                Join us in person every Saturday at {saturdayService?.time || '[Service Time]'}
              </h2>
            </div>
            <div className="btn-row">
              <Link className="btn-secondary" to="/contact">
                Plan Your Visit
              </Link>
              <Link className="btn" to="/giving">
                Give Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LiveStreaming;
