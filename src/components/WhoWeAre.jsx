import React from 'react';
import Pastors from '../assets/Pastors.jpg';
import PastorsInGreenRobes from '../assets/PastorsInGreenRobes.jpg';
import Pews from '../assets/Pews.jpg';
import PulpitReading from '../assets/PulpitReading.jpg';
import ChildrenChoir from '../assets/ChildrenChoir.jpg';
import StFrancis from '../assets/StFrancis.png';
import AsisiGarden from '../assets/AsisiGarden.png';
import Bishop from '../assets/Bishop.jpg';
import BishopPews from '../assets/BishopPews.jpg';
import Basilica from '../assets/Basilica.jpg';
import SeminarianCake from '../assets/SeminarianCake.jpg';
import FatherBlessing from '../assets/FatherBlessing.jpg';
('use client');
import { Carousel } from 'flowbite-react';

const WhoWeAre = () => {
  return (
    <>
      <div>
        <div className='flex flex-auto overflow-hidden rounded-lg md:h-96'>
          <Carousel>
            <img src={PastorsInGreenRobes} className='' alt='..' />

            <img src={Pews} className='' alt='..' />

            <img src={Pastors} className='h-full' alt='..' />

            <img src={PulpitReading} className='h-full' alt='..' />

            <img src={FatherBlessing} className='h-full' alt='..' />

            <img src={ChildrenChoir} className='h-full w-full' alt='..' />
            <img src={Bishop} className='h-full' alt='..' />

            <img src={BishopPews} className='h-full' alt='..' />

            <img src={Basilica} className='h-full' alt='..' />
            <img src={SeminarianCake} className='h-full' alt='..' />
          </Carousel>
        </div>

        <section className='sm:mt-6 lg:mt-8 mt-12 max-w-7xlmx-auto px-4 sm:px-6 lg:px-8'>
          <div className='my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row'>
            <div className='sm:text-center lg:text-left'>
              <h1 className='text-xl tracking-tight font-extrabold text-gray-800 sm:txt-3xl md:text-4xl'>
                <span className='text-center block xl:inline'>
                  Lets Introduce ourselves
                </span>
              </h1>
              <p className='mt-3 text-base text-gray-900  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                Established on June 24th, 2014, Jumuiaa of St. Francis DMV
                received its official blessing on April 22nd, 2018. With the
                official blessings bestowed upon us, Jumuiaa St. Francis DMV
                continued its journey, celebrating Swahili masses at various
                locations including the Basilica of the National Shrine of the
                Immaculate Conception, Capuchin College, and virtually.
                Additionally, our Jumuiaa has been steadfast in hosting
                after-mass receptions and coming together in prayers and
                memorial celebrations to support one another.
                <br></br>
                <br></br>
                Throughout our journey, Jumuiaa of St. Francis DMV has remained
                committed to charitable initiatives, including food drives, and
                supporting the Naro Moro Disabled Children’s Home. We have also
                been proud participants and financial supporters of the Kenya
                Catholic Community in America (KCCA), annually contributing to
                Swahili masses and retreats, when possible. Our community has
                been honored to host masses presided over by distinguished
                guests such as Archbishop Maurice Muhatia Makumba in August 2018
                and Archbishop Anthony Muheria in February 2019, both hailing
                from Kenya, in collaboration with the Kenya Catholic Community
                in America. Most recently, Bishop Wolfgang Pisa of the Diocese
                of Lindi, Tanzania, graced our community with his presence in
                July 2023, in collaboration with the Tanzania Catholic
                community.
              </p>
              <div className='mt-5 my-3 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div className='mt-3  sm:mt-0 sm:ml-3'>
                  <a
                    href='#'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10'
                  >
                    Join Our Mailing List
                  </a>
                </div>
                <div className='mt-3  sm:mt-0 sm:ml-3'>
                  <a
                    href='#'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-gray-600 md:py-4 md:text-lg md:px-10'
                  >
                    Donate to Support Our Ministry
                  </a>
                </div>
              </div>
            </div>
            <div className='lg:inset-y-0 lg:right-0 lg:w-1/2 my-4'>
              <img
                className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
                src={AsisiGarden}
                alt='img'
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhoWeAre;
