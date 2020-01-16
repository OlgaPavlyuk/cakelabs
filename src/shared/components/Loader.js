import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
      <span className="loader__text">Загрузка</span>
      <span className="loader__dots">
        <span className="loader__dot">.</span>
        <span className="loader__dot">.</span>
        <span className="loader__dot">.</span>
      </span>
    </div>
  );
}

export default Loader;
