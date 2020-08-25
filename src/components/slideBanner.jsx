import React, { useEffect } from 'react';

import NavButtons from './navButtons';
import SlideBannerArticle from './slideBannerArticle';
import slideBannerData from '../lib/slideBannerData';
import './slideBanner.scss';

const SlideBanner = () => {
  const articleWrapper = React.createRef();

  useEffect(() => {
    const dataCount = slideBannerData.length;
    articleWrapper.current.style.width = getBannerWidth() * dataCount + 'px';
    window.onresize = function () {
      articleWrapper.current.style.width = getBannerWidth() * dataCount + 'px';
    };
    return () => {
      window.onresize = function () {};
    };
  }, []);

  const getBannerWidth = () => {
    return articleWrapper.current.parentElement.offsetWidth;
  };

  const setBannerOrder = (index) => {
    articleWrapper.current.children[index].scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="slide-banner">
      <NavButtons datas={slideBannerData} setBannerOrder={setBannerOrder} />
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
