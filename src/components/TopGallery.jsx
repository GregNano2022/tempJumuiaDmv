import React from 'react';
import Sacrament from '../assets/Sacrament.jpg';
import Pastors from '../assets/Pastors.jpg';
import PastorsInGreenRobes from '../assets/PastorsInGreenRobes.jpg';
import Pews from '../assets/Pews.jpg';
import PulpitReading from '../assets/PulpitReading.jpg';
import Cake from '../assets/Cake.jpg';
import PullingRope from '../assets/PullingRope.jpg';
import Picnic from '../assets/Picnic.jpg';
import ChildrenCake from '../assets/ChildrenCake.jpg';
import ChildrenChoir from '../assets/ChildrenChoir.jpg';
import FatherBlessing from '../assets/FatherBlessing.jpg';
import JumuiaCover from '../assets/JumuiaCover.jpg';
import Offering2 from '../assets/Offering2.jpg';
import Offring from '../assets/Offring.jpg';
import Procession from '../assets/Procession.jpg';
import Altar from '../assets/Altar.jpg';
import Procession2 from '../assets/Procession2.jpg';
import AltarReading from '../assets/AltarReading.jpg';
import MassExit from '../assets/MassExit.jpg';
import KCA from '../assets/KCA.jpg';
import JuneMass from '../assets/JuneMass.jpg';
import Sister from '../assets/Sister.jpg';
import SisterAltar from '../assets/SisterAltar.jpg';
('use client');
import { Carousel } from 'flowbite-react';
const TopGallery = () => {
  return (
    <>
      <section className='grid grid-cols-2 sm:mt-6 lg:mt-8 mt-12 max-w-7xlmx-auto px-4 sm:px-6 lg:px-8'>
        <div className='col-span-2 ml-3 '>
          <Carousel className='h-96 w-96'>
            <img src={PastorsInGreenRobes} className='' alt='..' />

            <img src={PastorsInGreenRobes} className='' alt='..' />

            <img src={Pews} className='' alt='..' />

            <img src={Pastors} className='' alt='..' />

            <img src={PulpitReading} className='' alt='..' />

            <img src={FatherBlessing} className='' alt='..' />

            <img src={ChildrenChoir} className='' alt='..' />

            <img src={Offering2} className='' alt='..' />

            <img src={Offring} className='' alt='..' />

            <img src={Sister} className='' alt='..' />

            <img src={SisterAltar} className='' alt='..' />
            <img src={Procession} className='' alt='..' />
            <img src={JuneMass} className='' alt='..' />

            <img src={Procession2} className='' alt='..' />
            <img src={Altar} className='' alt='..' />
            <img src={AltarReading} className='' alt='..' />
            <img src={MassExit} className='' alt='..' />

            <img src={KCA} className='' alt='..' />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default TopGallery;
