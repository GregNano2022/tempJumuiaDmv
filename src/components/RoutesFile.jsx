import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Banner from './Banner';
import WhoWeAre from './WhoWeAre';
import GoalsAndObjectives from './GoalsAndObjectives';
import SwahiliMasses from './SwahiliMasses';
import GetInvolved from './GetInvolved';
import Donations from './Donations';
import WorshipEvents from './WorshipEvents';
import SocialEvents from './SocialEvents';
import Contact from './Contact';
import Footer from './Footer';
import { Carousel, Navbar } from 'flowbite-react';
import TopGallery from './TopGallery';
const routes = () => {
  return (
    <div>
      <Routes>
        <Route path='/Navbar' element={<Navbar />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Banner' element={<Banner />} />
        <Route path='/TopGallery' element={<TopGallery />} />

        <Route path='/WhoWeAre' element={<WhoWeAre />} />
        <Route path='/GoalsAndObjectives' element={<GoalsAndObjectives />} />
        <Route path='/WorshipEvents' element={<WorshipEvents />} />
        <Route path='/SwahiliMasses' element={<SwahiliMasses />} />
        <Route path='/GetInvolved' element={<GetInvolved />} />
        <Route path='/Donations' element={<Donations />} />

        <Route path='/SocialEvents' element={<SocialEvents />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Footer' element={<Footer />} />
      </Routes>
    </div>
  );
};

export default routes;
