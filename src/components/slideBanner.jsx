import React, { useEffect, useState } from 'react';

import NavButtons from './navButtons';
import SlideBannerArticle from './slideBannerArticle';
import datas from '../lib/slideBannerData';
import './slideBanner.scss';

const SLIDE_INTERVAL_TIME = 2000;
const SLIDE_MOVING_SPEED = 15;

const articleWrapper = React.createRef();
let bannerIndexVar = 0;
let slideId;

const SlideBanner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(function setArticleWrapperWidth() {
    const dataCount = datas.length;
    articleWrapper.current.style.width = getBannerWidth() * dataCount + 'px';
    window.onresize = function () {
      articleWrapper.current.style.width = getBannerWidth() * dataCount + 'px';
      // setBannerOrder(bannerIndexVar);
    };
    return () => {
      window.onresize = function () {};
    };
  }, []);

  useEffect(function setAutoSlideArticle() {
    const endIndex = datas.length - 1;
    const id = setInterval(() => {
      setBannerOrder(endIndex <= bannerIndexVar ? 0 : bannerIndexVar + 1);
    }, SLIDE_INTERVAL_TIME);
    return () => {
      clearInterval(id);
      clearInterval(slideId);
    };
  }, []);

  const getBannerWidth = () => {
    return articleWrapper.current.parentElement.offsetWidth;
  };

  const setBannerOrder = (index) => {
    if (index === 0) setAnimationToSlideAtEnd();
    else setAnimationToSlide(index);

    bannerIndexVar = index;
    setBannerIndex(index);
  };

  const setAnimationToSlide = (index) => {
    // const slider = articleWrapper.current.parentElement;
    // slider.scrollLeft = getBannerWidth() * index;
    console.log('index:', index);
    console.log('getBannerWidth() * index:', getBannerWidth() * index);
    clearInterval(slideId);
    const slider = articleWrapper.current.parentElement;
    slider.scrollLeft = getBannerWidth() * (index - 1);
    slideId = setInterval(() => {
      const slider = articleWrapper.current.parentElement;
      slider.scrollLeft += SLIDE_MOVING_SPEED;
      if (slider.scrollLeft >= getBannerWidth() * index) {
        slider.scrollLeft = getBannerWidth() * index;
        clearInterval(slideId);
      }
    }, 1);
  };

  const setAnimationToSlideAtEnd = () => {
    // const slider = articleWrapper.current.parentElement;
    // slider.scrollLeft = 0;
    console.log('index:', '0');
    console.log(
      'getBannerWidth() * index:',
      getBannerWidth() * (datas.length - 1)
    );
    clearInterval(slideId);
    const slider = articleWrapper.current.parentElement;
    slider.scrollLeft = getBannerWidth() * (datas.length - 1);
    slideId = setInterval(() => {
      const slider = articleWrapper.current.parentElement;
      slider.scrollLeft -= datas.length * SLIDE_MOVING_SPEED;
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = 0;
        clearInterval(slideId);
      }
    }, 1);
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
