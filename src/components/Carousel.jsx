import React from 'react';
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
('use client');
import { Carousel } from 'flowbite-react';
const Carousel = () => {
  return (
    <>
      <div>
        <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
          <Carousel>
            <img src={PastorsInGreenRobes} className='' alt='..' />

            <img src={Pews} className='' alt='..' />

            <img src={Pastors} className='' alt='..' />

            <img src={PulpitReading} className='' alt='..' />

            <img src={FatherBlessing} className='' alt='..' />

            <img src={ChildrenChoir} className='' alt='..' />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Carousel;
