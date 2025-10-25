import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import GetInvolved from '../components/GetInvolved';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Services />
      <Blog />
      <FAQ />
      <GetInvolved />
    </div>
  );
};

export default Home;

