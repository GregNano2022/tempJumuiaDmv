import React from 'react';
import Pastors from '../assets/Pastors.jpg';
import PastorsInGreenRobes from '../assets/PastorsInGreenRobes.jpg';
import Lunch1 from '../assets/Lunch1.jpg';
import PulpitReading from '../assets/PulpitReading.jpg';
import Cake from '../assets/Cake.jpg';
import Procession from '../assets/Procession.mp4';
import KenyaBishop from '../assets/KenyaBishop.mp4';
import SeminarianCake from '../assets/SeminarianCake.jpg';
import PullingRope from '../assets/PullingRope.jpg';
import Picnic from '../assets/Picnic.jpg';
import ChildrenCake from '../assets/ChildrenCake.jpg';
import ChildrenChoir from '../assets/ChildrenChoir.jpg';
import SwahiliMassFlyer from '../assets/SwahiliMassFlyer.jpg';
import FatherBlessing from '../assets/FatherBlessing.jpg';
('use client');
import { Carousel } from 'flowbite-react';

const SocialEvents = () => {
  return (
    <>
      <h1 className='text-xl tracking-tight font-extrabold text-gray-800 sm:txt-3xl md:text-4xl'>
        <span className='block text-center xl:inline'>Social Events</span>
      </h1>
      <div className='grid grid-cols-2 gap-4 mx-2 my-20 relative sm:h-64 xl:h-80 2xl:h-96'>
        <div>
          <h1 className='text-xl text-bold '>
            Videos of our Gallery of Some Memorable Jumuia Events
          </h1>
          <div>
            <Carousel className='h-96 py-9'>
              <video
                className='h-screen rounded-lg autoplay loop muted'
                controls
              >
                <source src={Procession} type='video/mp4' />
              </video>
              <video
                className='h-screen rounded-lg autoplay loop muted'
                controls
              >
                <source src={KenyaBishop} type='video/mp4' />
              </video>
            </Carousel>
          </div>
        </div>
        <div>
          <h1 className='text-xl text-bold '>
            Some Jumuia Community Events, Luncheons and Get Togethers
          </h1>
          <div className='object-fit-cover h-screen '>
            <Carousel className='h-96 py-9'>
              <img src={Cake} className='w-96' alt='..' />
              <img src={ChildrenCake} className='w-96' alt='..' />
              <img src={Picnic} className='' alt='..' />
              <img src={PullingRope} className='' alt='..' />
              <img src={PulpitReading} className=' w-96 h-96' alt='..' />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialEvents;
