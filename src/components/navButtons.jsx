import React from 'react';

import NavButton from './navButton';
import './navButtons.scss';

const NavButtons = ({ datas }) => {
  return (
    <div className="slide-banner__nav-buttons">
      {datas.map((data) => (
        <NavButton key={data.id} />
      ))}
    </div>
  );
};

export default NavButtons;
