import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Bishop Billy Gore', to: '/about-bishop-billy-gore' },
  { label: 'About General Overseer Gore', to: '/about-general-overseer-annette-gore' },
  { label: 'Service Times', to: '/service-times' },
  { label: 'Announcements', to: '/announcements' },
  { label: 'Ministries', to: '/ministries' },
  { label: 'Live Streaming', to: '/live-streaming' },
  { label: 'Giving', to: '/giving' },
  { label: 'Contact', to: '/contact' }
];

function LogoBadge() {
  const [broken, setBroken] = useState(false);

  return (
    <div className="brand-logo">
      {!broken ? (
        <img
          src="/assets/mallard-creek-logo.png"
          alt="Mallard Creek Worship Center Logo"
          onError={() => setBroken(true)}
        />
      ) : (
        <div className="fallback-logo">MCWC</div>
      )}
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`nav-shell ${isOpen ? 'nav-menu-open' : ''}`}>
      <div className="container">
        <div className="nav-frame">
          <Link className="nav-logo-link" to="/" onClick={closeMenu} aria-label="Go to home page">
            <LogoBadge />
          </Link>

          <nav className="nav-bar glass-card" aria-label="Primary navigation">
            <div className="nav-links" role="menubar">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="nav-actions">
              <Link
                className={`btn-secondary nav-cta-live ${location.pathname === '/live-streaming' ? 'current' : ''}`}
                to="/live-streaming"
                onClick={closeMenu}
              >
                Watch Live
              </Link>
              <Link className="btn nav-cta-give" to="/giving" onClick={closeMenu}>
                Give
              </Link>
            </div>

            <button
              className="nav-toggle"
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>

            <div className="nav-mobile-panel">
              <div className="nav-mobile-links">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => `nav-link nav-mobile-link ${isActive ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="nav-mobile-actions">
                <Link
                  className={`btn-secondary nav-cta-live ${location.pathname === '/live-streaming' ? 'current' : ''}`}
                  to="/live-streaming"
                  onClick={closeMenu}
                >
                  Watch Live
                </Link>
                <Link className="btn nav-cta-give" to="/giving" onClick={closeMenu}>
                  Give
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
