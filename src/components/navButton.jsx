import React from 'react';

import './navButton.scss';

const SELECTED_BUTTON_COLOR = 'rgb(196, 196, 196)';

const NavButton = ({ index, bannerIndex, setBannerOrder }) => {
  const isMatchIndex = () => {
    if (index === bannerIndex) {
      return { backgroundColor: SELECTED_BUTTON_COLOR };
    }
    return { backgroundColor: '' };
  };

  return (
    <button
      className="slide-banner__nav-button"
      style={isMatchIndex()}
      onClick={() => setBannerOrder(index)}
    ></button>
  );
};

export default NavButton;
