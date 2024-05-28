import React from 'react';
import RoutesFile from './components/RoutesFile';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Home from './components/Home';
import WhoWeAre from './components/WhoWeAre';
import WorshipEvents from './components/WorshipEvents';
import SocialEvents from './components/SocialEvents';
import GoalsAndObjectives from './components/GoalsAndObjectives';
import SwahiliMasses from './components/SwahiliMasses';
import GetInvolved from './components/GetInvolved';
import Donations from './components/Donations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TopGallery from './components/TopGallery';
import { Carousel } from 'flowbite-react';

const App = () => {
  return (
    <>
      <RoutesFile />
      <main>
        <div id='Navbar'>
          <Navbar />
        </div>
        <div id='Banner'>
          <Banner />
        </div>
        <div id='Home'>
          <Home />
        </div>
        <div id='TopGallery'>
          <TopGallery />
        </div>
        <div id='WhoWe re'>
          <WhoWeAre />
        </div>
        <div id='GoalsAndObjectives'>
          <GoalsAndObjectives />
        </div>
        <div id='WorshipEvents'>
          <WorshipEvents />
        </div>
        <div id='SwahiliMasses'>
          <SwahiliMasses />
        </div>
        <div id='GetInvolved'>
          <GetInvolved />
        </div>
        <div id='Donations'>
          <Donations />
        </div>
        <div id='SocialEvents'>
          <SocialEvents />
        </div>
        <div id='Contact'>
          <Contact />
        </div>
        <div id='Footer'>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;
