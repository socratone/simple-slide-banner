import React from 'react';

import './navButton.scss';

const NavButton = ({ index, setBannerOrder }) => {
  return (
    <button
      className="slide-banner__nav-button"
      onClick={() => setBannerOrder(index)}
    ></button>
  );
};

export default NavButton;
