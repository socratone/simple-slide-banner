import React from 'react';

import './slideBannerArticle.scss';

const SlideBannerArticle = ({ data }) => {
  return (
    <article
      className="slide-banner__article"
      style={{
        backgroundImage: `url(${data.image})`,
      }}
    >
      <div className="slide-banner__column1">
        <div className="slide-banner__column1-area">
          <h2 style={{ fontSize: '2rem', margin: 0 }}>{data.title}</h2>
          <p>{data.subTitle}</p>
          <button
            style={{
              padding: '0.7rem',
              backgroundColor: 'dodgerblue',
              border: 0,
              borderRadius: '0.25rem',
              outline: 'none',
            }}
          >
            더 알아보기
          </button>
        </div>
      </div>
      <div className="silde-banner__column2">
        <div className="silde-banner__column2-area">
          <i className="fab fa-react"></i>
        </div>
      </div>
      <div className="slide-banner__column3">
        <div className="slide-banner__column3-area">
          <ul>
            <li>잘 지내세요</li>
            <li>만나서 반가워요</li>
            <li>얼마나 오래됐나요</li>
            <li>밥은 먹고 다녀요</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default SlideBannerArticle;
