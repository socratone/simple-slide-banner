import React from 'react';

import NavButton from './navButton';
import './navButtons.scss';

const NavButtons = ({ datas, bannerIndex, setBannerOrder }) => {
  return (
    <div className="slide-banner__nav-buttons">
      {datas &&
        datas.map((data, index) => (
          <NavButton
            key={data.id}
            index={index}
            bannerIndex={bannerIndex}
            setBannerOrder={setBannerOrder}
          />
        ))}
    </div>
  );
};

export default NavButtons;
