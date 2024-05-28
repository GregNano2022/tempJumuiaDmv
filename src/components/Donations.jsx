import React from 'react';
import Prayer from '../assets/Prayer.jpg';

const Donations = () => {
  return (
    <>
      <br></br> <br></br>
      <h1 className='text-xl tracking-tight font-extrabold text-black sm:txt-3xl md:text-4xl'>
        <span className='block text-center xl:inline'>DONATE</span>
      </h1>{' '}
      <br></br>
      <div className='text-black h-auto  mx-2 bg-white-600 grid grid-cols-2'>
        <div>
          <h1 className='text-xl tracking-tight font-extrabold text-black text-center sm:txt-3xl md:text-4xl'></h1>

          <p className='mt-3 text-base text-black  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
            Dear Beloved Friend, As we continue to journey together in faith, we
            seek your support towards our gatherings and Swahili Mass
            celebration, which are not only moments of spiritual enrichment but
            also pillars of our unity and strength as a community. <br></br>
            <br></br>
            We're reaching out requesting you to help sustain our efforts.{' '}
            <br></br>Your contributions play a vital role in ensuring that we
            can continue to hold these sacred gatherings, where we come together
            to receive the Eucharist, reflect on the Word of God, and strengthen
            our bonds with one another. They will also support various aspects
            including outreach and engagement. <br></br>
            <br></br>We understand that times may be challenging for some, but
            even the smallest contribution can make a significant difference.
            Together, we can ensure that our community continues to thrive and
            grow in faith.<br></br> <br></br>Let's come together in solidarity
            and generosity to support our community. Your donations are not just
            financial contributions; they are expressions of your commitment to
            our shared spiritual journey.<br></br> <br></br>Thank you for your
            continued support and dedication to our jumuiaa.
            <br></br> <br></br>
            May God bless you abundantly for your generosity. <br></br>
            <br></br>Yours in Christ,<br></br>
            <br></br>Jumuia of StFrancis DMV
          </p>
        </div>
        <div className='py-2 my-3'>
          <img
            src={Prayer}
            alt='..'
            className='w-full h-full object-cover'
          ></img>
        </div>
        <div className=' py-8 my-10'>
          <button className='mt-3 sm:mt-0 sm:ml-3'>
            <a
              href='#'
              className='mx-20 block items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-gray-600 md:py-4 md:text-lg md:px-10'
            >
              Donate to Support Our Ministry
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Donations;
