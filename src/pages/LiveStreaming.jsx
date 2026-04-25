import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/MallardCreekWorshipCenter';
// Facebook may require a specific public live video URL for direct playback in the embedded video player.
// If a public live or replay video URL is available, place it here to prioritize the official embedded video player.
const FACEBOOK_LIVE_VIDEO_URL = '';
const FACEBOOK_PAGE_PLUGIN_URL =
  'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMallardCreekWorshipCenter&tabs=timeline&width=1200&height=720&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false';

function encodeUrl(url) {
  return encodeURIComponent(url);
}

function LiveStreaming() {
  const embedRef = useRef(null);
  const [shouldLoadEmbed, setShouldLoadEmbed] = useState(false);
  const [embedFailed, setEmbedFailed] = useState(false);

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

  const embedSrc = useMemo(() => {
    if (FACEBOOK_LIVE_VIDEO_URL) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeUrl(
        FACEBOOK_LIVE_VIDEO_URL
      )}&show_text=false&width=1200&allowfullscreen=true`;
    }

    return FACEBOOK_PAGE_PLUGIN_URL;
  }, []);

  const playerContent = useMemo(() => {
    if (embedFailed) {
      return (
        <div className="stream-fallback glass-card">
          <h2 className="section-title">Live stream available on Facebook</h2>
          <p className="section-copy">
            Join Mallard Creek Worship Center on Facebook to watch the live broadcast and view the latest ministry
            video updates.
          </p>
          <a className="btn" href={FACEBOOK_PAGE_URL} target="_blank" rel="noreferrer">
            Watch on Facebook
          </a>
        </div>
      );
    }

    return shouldLoadEmbed ? (
      <iframe
        src={embedSrc}
        title={
          FACEBOOK_LIVE_VIDEO_URL
            ? 'Mallard Creek Worship Center Facebook Live Video'
            : 'Mallard Creek Worship Center Facebook Live and Page Feed'
        }
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        onError={() => setEmbedFailed(true)}
      />
    ) : (
      <div className="stream-loading">
        <p className="section-copy">Preparing Facebook live player...</p>
      </div>
    );
  }, [embedFailed, shouldLoadEmbed]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-card glass-card">
            <span className="eyebrow">Broadcast Worship</span>
            <h1 className="page-title">Watch Live</h1>
            <p className="page-copy">Join Mallard Creek Worship Center live on Facebook.</p>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container grid">
          <div className="stream-player-shell glass-card" ref={embedRef}>
            <div className="stream-embed stream-embed-facebook">{playerContent}</div>
            <p className="stream-note">
              {FACEBOOK_LIVE_VIDEO_URL
                ? 'Facebook direct video playback is enabled using a specific public live video URL.'
                : 'This page will use Facebook direct playback when a specific public live video URL is configured.'}
            </p>
          </div>

          <article className="stream-card glass-card">
            <h2 className="section-title">Stay connected in worship</h2>
            <p className="section-copy">
              Watch the Facebook live stream here when a public live video is available, or catch the latest page video
              and ministry feed on the church Facebook page.
            </p>
            <div className="btn-row">
              <a className="btn" href={FACEBOOK_PAGE_URL} target="_blank" rel="noreferrer">
                Watch on Facebook
              </a>
              <Link className="btn-secondary" to="/giving">
                Give Online
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default LiveStreaming;
