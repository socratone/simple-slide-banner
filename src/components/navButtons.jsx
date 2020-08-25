import React from 'react';

import NavButton from './navButton';
import './navButtons.scss';

const NavButtons = ({ datas, setBannerOrder }) => {
  return (
    <div className="slide-banner__nav-buttons">
      {datas.map((data, index) => (
        <NavButton
          key={data.id}
          index={index}
          setBannerOrder={setBannerOrder}
        />
      ))}
    </div>
  );
};

export default NavButtons;
