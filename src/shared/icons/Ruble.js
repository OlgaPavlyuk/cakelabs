import React from 'react';

const Ruble = (props) => {
  const { width, height } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 330 330" width={width} height={height}>
      <path d="M180 170c46.869 0 85-38.131 85-85S226.869 0 180 0c-.183 0-.365.003-.546.01H110.02l-.019-.001c-8.284 0-15 6.716-15 15V200H80c-8.284 0-15 6.716-15 15s6.716 15 15 15h15v85c0 8.284 6.716 15 15 15s15-6.716 15-15v-85h55c8.284 0 15-6.716 15-15s-6.716-15-15-15h-55v-30h55zm0-139.99c.162 0 .324-.003.484-.008C210.59 30.262 235 54.834 235 85c0 30.327-24.673 55-55 55h-55V30.01h55z" />
    </svg>
  );
};

export default Ruble;
