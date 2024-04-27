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
        <div id='Who We Are'>
          <WhoWeAre />
        </div>
        <div id='WorshipEvents'>
          <WorshipEvents />
        </div>
        <div id='Goals and Objectives'>
          <GoalsAndObjectives />
        </div>
        <div id='Swahili Masses'>
          <SwahiliMasses />
        </div>
        <div id='Get Involved'>
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
      </main>

      <Footer />
    </>
  );
};

export default App;
