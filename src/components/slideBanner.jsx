import React, { useEffect, useState } from 'react';

import NavButtons from './navButtons';
import SlideBannerArticle from './slideBannerArticle';
import slideBannerData from '../lib/slideBannerData';
import './slideBanner.scss';

const articleWrapper = React.createRef();
let bannerIndex = 0;

const SlideBanner = () => {
  const [bannerIndexState, setBannerIndex] = useState(0);

  useEffect(function setArticleWrapperWidth() {
    const dataCount = slideBannerData.length;
    articleWrapper.current.style.width = getBannerWidth() * dataCount + 'px';
    window.onresize = function () {
      articleWrapper.current.style.width = getBannerWidth() * dataCount + 'px';
    };
    return () => {
      window.onresize = function () {};
    };
  }, []);

  useEffect(function setAutoSlideArticle() {
    const lastIndex = slideBannerData.length - 1;
    const id = setInterval(() => {
      setBannerOrder(lastIndex <= bannerIndex ? 0 : bannerIndex + 1);
    }, 2000);
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
    bannerIndex = index;
    setBannerIndex(index);
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
