import React from 'react';

const Star = (props) => {
  const { width, height } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 151.57 151.57" width={width} height={height}>
      <circle cx="1241.57" cy="670.08" r="72.28" className='circle' strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" transform="rotate(-45 -58.702 1780.165)" />
      <path className='star' strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M75.78 41.23l11.23 22.75 25.11 3.65-18.17 17.7 4.29 25.01-22.46-11.81-22.45 11.81 4.29-25.01-18.17-17.7 25.11-3.65 11.22-22.75z" />
    </svg>
  );
};

export default Star;
