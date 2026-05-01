import { useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';
import Home from './pages/Home';
import AboutBishop from './pages/AboutBishop';
import AboutOverseer from './pages/AboutOverseer';
import ServiceTimes from './pages/ServiceTimes';
import Announcements from './pages/Announcements';
import Ministries from './pages/Ministries';
import LiveStreaming from './pages/LiveStreaming';
import Giving from './pages/Giving';
import Contact from './pages/Contact';

const serviceSchedule = [
  {
    name: 'Saturday Worship Service',
    time: '10:30 AM',
    details: 'In-person worship gathering'
  },
  {
    name: 'Tuesday Intercessory Prayer',
    time: '5:15 PM',
    details: 'Via conference call',
    phone: '(267) 807-9495',
    accessCode: '525255027'
  },
  {
    name: 'Wednesday Bible Study',
    time: '5:15 PM',
    details: 'Via conference call',
    phone: '(267) 807-9495',
    accessCode: '525255027'
  }
];

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    const scrollTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      const main = document.querySelector('main');
      if (main) {
        main.scrollTop = 0;
      }
    };

    scrollTop();

    const rafId = window.requestAnimationFrame(scrollTop);
    const timeoutId = window.setTimeout(scrollTop, 0);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname, location.search, location.hash, location.key]);

  return null;
}

function App() {
  return (
    <div className="site-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-orb orb-three" />
      <ScrollToTop />
      <Navbar />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home serviceSchedule={serviceSchedule} />} />
          <Route path="/about-bishop-billy-gore" element={<AboutBishop />} />
          <Route path="/about-general-overseer-annette-gore" element={<AboutOverseer />} />
          <Route path="/service-times" element={<ServiceTimes serviceSchedule={serviceSchedule} />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/live-streaming" element={<LiveStreaming serviceSchedule={serviceSchedule} />} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/contact" element={<Contact serviceSchedule={serviceSchedule} />} />
        </Routes>
      </main>
      <Footer serviceSchedule={serviceSchedule} />
      <BackgroundMusic />
    </div>
  );
}

export default App;
