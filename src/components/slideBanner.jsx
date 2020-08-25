import React, { useEffect, useState } from 'react';

import NavButtons from './navButtons';
import SlideBannerArticle from './slideBannerArticle';
import datas from '../lib/slideBannerData';
import './slideBanner.scss';

const SLIDE_INTERVAL_TIME = 2000;

const articleWrapper = React.createRef();
let bannerIndexVar = 0;

const SlideBanner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(function setArticleWrapperWidth() {
    const dataCount = datas.length;
    articleWrapper.current.style.width = getBannerWidth() * dataCount + 'px';
    window.onresize = function () {
      articleWrapper.current.style.width = getBannerWidth() * dataCount + 'px';
    };
    return () => {
      window.onresize = function () {};
    };
  }, []);

  useEffect(function setAutoSlideArticle() {
    const lastIndex = datas.length - 1;
    const id = setInterval(() => {
      setBannerOrder(lastIndex <= bannerIndexVar ? 0 : bannerIndexVar + 1);
    }, SLIDE_INTERVAL_TIME);
    return () => {
      clearInterval(id);
    };
  }, []);

  const getBannerWidth = () => {
    return articleWrapper.current.parentElement.offsetWidth;
  };

  const setBannerOrder = (index) => {
    articleWrapper.current.children[index].scrollIntoView({
      behavior: 'smooth',
    });
    bannerIndexVar = index;
    setBannerIndex(index);
  };

  return (
    <section className="slide-banner">
      <NavButtons
        datas={datas}
        bannerIndex={bannerIndex}
        setBannerOrder={setBannerOrder}
      />
      <div className="slide-banner__constant-ratio-wrapper">
        <div className="slide-banner__constant-ratio-div">
          <div className="slide-banner__article-wrapper" ref={articleWrapper}>
            {datas.map((data) => (
              <SlideBannerArticle key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideBanner;
