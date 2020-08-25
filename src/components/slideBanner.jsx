import React from 'react';

import slideBannerData from '../lib/slideBannerData';
import './slideBanner.scss';
import './constantRatio.scss';

const SlideBanner = () => {
  return (
    <section className="slide-banner">
      <div className="slide-banner__constant-ratio-wrapper">
        <div className="slide-banner__constant-ratio-div">
          <article
            className="slide-banner__article"
            style={{ backgroundImage: `url(${slideBannerData[0].image})` }}
          ></article>
        </div>
      </div>
    </section>
  );
};

export default SlideBanner;
