import React from 'react';

import './navButton.scss';

const NavButton = ({ index, bannerIndex, setBannerOrder }) => {
  const isMatchIndex = () => {
    if (index === bannerIndex) return ' slide-banner__nav-button--selected';
    return '';
  };

  return (
    <button
      className={`slide-banner__nav-button${isMatchIndex()}`}
      onClick={() => setBannerOrder(index)}
    ></button>
  );
};

export default NavButton;
