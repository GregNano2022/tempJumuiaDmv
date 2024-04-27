import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button className=' bg-red-900 py-2 px-5 text-white rounded-full mt-4 outline hover:shadow-[rgb(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-brightBlue hover:text-white transition-all'></button>
      {props.title}
    </div>
  );
};

export default Button;
