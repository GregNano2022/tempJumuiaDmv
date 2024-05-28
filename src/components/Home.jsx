import React from 'react';
import PatronPhoto from '../assets/PatronPhoto.jpg';
import JuneMass from '../assets/JuneMass.jpg';
import SifuniJinaLake from '../assets/SifuniJinaLake.jpg';
import drum1 from '../assets/drum1.png';
('use client');
const Home = () => {
  return (
    <>
      <br></br>
      <br></br>
      <h1 className='text-xl tracking-tight font-extrabold text-gray-800 sm:txt-3xl md:text-4xl'>
        <span className='block text-center xl:inline'>Welcome-Karibu</span>
      </h1>{' '}
      <div className='mt-12 grid grid-cols-3  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        <div className=' mx-2 py-2 my-2 border border-gray-200 col-span-2 bg-white-600 text-lg text-blk'>
          <img className=' ' src={PatronPhoto} />
          <span className='grid1-item'>
            <h1 className='mb-2  text-xl font-medium leading-tight'>
              Welcome Message From Our Patron:
            </h1>
            <p className='mb-3 '>Dear Friends,</p>
            <p className='mb-3'>
              On behalf of the Jumuiaa (a small Catholic community) of St.
              Francis DMV, I extend a warm welcome to you all.<br></br>
              <br></br>
              Welcome to the Jumuiaa of St. Francis DMV, and thank you for
              gracing us with your presence. Your visit here is truly a
              blessing, and we are delighted to have you among us. At Jumuiaa of
              St. Francis DMV, we are deeply committed to celebrating the
              sacrament of the Holy Eucharist during our Swahili masses, praying
              together, and sharing the love of Christ with our family, friends,
              neighbors, and newcomers alike.
              <br></br>
              <br></br>
              Guided by the words of Pope Francis, we believe in "living our
              faith not in isolation but in community, as a people loved and
              willed by God." Our aim is to strengthen faith, spirituality, and
              devotion, while honoring our blessed Mother and reaffirming our
              commitment to lead a prayerful life.<br></br>
              <br></br>
              Additionally, we are driven to evangelize, motivate, and offer
              support to one another. Our dedication is encapsulated in the
              words of our patron Saint, St. Francis of Assisi, who said, "Start
              by doing what is necessary, then do what is possible, and suddenly
              you are doing the impossible." Once again, welcome to our
              community. We invite you to join us for our Swahili Mass or to
              participate in our prayers whenever you can.
              <br></br>
              <br></br> With every best wish and prayer,<br></br> <br></br>
              Fr. Gabriel Muteru Patron, <br></br>Jumuiaa of St Francis DMV.
            </p>
          </span>
        </div>

        <div className='my-2 bg-orange-600 mx-2 text-lg text-white '>
          <span className='text-white-900 '>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-white-500 dark:text-white-400'>
              Announcements
            </h5>
            <img className='px-2 ' src={JuneMass} />
            <p>Please join us for our next Swahili Mass on June 23, 2024</p>
            <p>
              Swahili Massess are held on 4th Sundays of even months, except for
              Dec.
            </p>
            <p>
              <h3>Time: @2:00 PM</h3>
              <h3>Location:</h3>EST Marymount University
            </p>
            <p>
              Sacred Heart of Mary Chapel  2807 North Glebe Road Arlington,
              Virginia 2220{' '}
            </p>
          </span>
          <div>
            <img className='roundend-t-lg ' src={SifuniJinaLake} />
            <img className='roundend-t-lg ' src={drum1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
