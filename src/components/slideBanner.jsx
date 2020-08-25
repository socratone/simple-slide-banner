import React, { useEffect } from 'react';

import NavButtons from './navButtons';
import SlideBannerArticle from './slideBannerArticle';
import slideBannerData from '../lib/slideBannerData';
import './slideBanner.scss';

const articleWrapper = React.createRef();

const SlideBanner = () => {
  useEffect(() => {
    const dataCount = slideBannerData.length;
    const bannerWidth = articleWrapper.current.parentElement.offsetWidth;
    articleWrapper.current.style.width = bannerWidth * dataCount + 'px';
    window.onresize = function () {
      const bannerWidth = articleWrapper.current.parentElement.offsetWidth;
      articleWrapper.current.style.width = bannerWidth * dataCount + 'px';
    };
    return () => {
      window.onresize = function () {};
    };
  }, []);

  return (
    <section className="slide-banner">
      <NavButtons datas={slideBannerData} />
      <div className="slide-banner__constant-ratio-wrapper">
        <div className="slide-banner__constant-ratio-div">
          <div className="slide-banner__article-wrapper" ref={articleWrapper}>
            {slideBannerData.map((data) => (
              <SlideBannerArticle key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideBanner;
