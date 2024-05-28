import React from 'react';
import Prayer from '../assets/Prayer.jpg';
import PullingRope from '../assets/PullingRope.jpg';
const GetInvolved = () => {
  return (
    <>
      <br></br> <br></br>
      <h1 className='text-xl tracking-tight font-extrabold text-black sm:txt-3xl md:text-4xl'>
        <span className='block text-center xl:inline'>Get Involved</span>
      </h1>{' '}
      <br></br>
      <div className='grid grid-cols-2 mx-2 bg-white-600 text-black'>
        <div>
          <p className='mt-3 text-base text-black  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
            Dear Friend of the Jumuia of St. Francis DMV, As a community, the
            Jumuia of St. Francis DMV continually strives to live out the
            teachings of Christ and the values of the Catholic faith. <br></br>
            <br></br>Our community is committed to serving God and those in need
            through various initiatives. These efforts are inspired by the
            example of St. Francis of Assisi, who said, "For it is in giving
            that we receive." This profound truth reminds us that our generosity
            not only blesses others but also brings grace and fulfillment to our
            own lives.
            <br></br>
            <br></br> It is from this conviction that we seek your support to
            sustain our efforts. Your support will enable us to continue helping
            those in need, expand our outreach efforts, enhance our Swahili Mass
            liturgical capacity, and revitalize our evangelization efforts. No
            gift is too small, and every donation makes a significant impact. We
            are deeply grateful for your prayerful consideration of this
            request.
            <br></br>
            <br></br>Together, we can continue to be a beacon of hope and a
            source of God's love in our community. We appeal to you to sustain
            our efforts by donating through the information below. <br></br>
            <br></br>May God bless you abundantly for your kindness and
            generosity.
          </p>
          <br></br>
          <br></br>
          <p>CashApp information: [Insert CashApp Information] </p>
          <br></br>
          <br></br>
          <p>
            Zelle Information: [Insert Zelle Information] In Christ's peace,
            Jumuia of St Francis DMV
          </p>
        </div>
        <div className='py-2 my-3'>
          <img
            src={PullingRope}
            alt='..'
            className='w-full h-full object-cover'
          ></img>
        </div>
      </div>
    </>
  );
};

export default GetInvolved;
