import React, { useState } from 'react';
import Header from '../components/Header';
import BuildersList from '../components/BuildersList';
import MatchingForm from '../components/MatchingForm';
import MatchingResults from '../components/MatchingResults';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home = () => {
  const [matches, setMatches] = useState([]);

  return (
    <>
      <Header />
      <div id="match-section">
        <BuildersList />
        <MatchingForm onMatch={setMatches} />
        {matches.length > 0 && <MatchingResults results={matches} />}
      </div>
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
