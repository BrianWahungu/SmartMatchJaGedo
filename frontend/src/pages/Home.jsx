import React from 'react';
import Header from '../components/Header';
import BuildersList from '../components/BuildersList';
import StartMatching from '../components/StartMatching';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />

      <BuildersList />

      {/* ✅ Start Matching section scrolls here */}
      <div id="match-section">
        <StartMatching />
      </div>

      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
